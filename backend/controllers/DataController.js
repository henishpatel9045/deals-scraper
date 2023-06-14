const DataModel = require("../models/DataModel");

const getAllStores = async (req, res) => {
  try {
    const result = await DataModel.aggregate([
      { $sort: { createdAt: -1 } },
      {
        $project: {
          image: 1,
          storeName: 1,
          totalCities: { $size: "$data" },
          totalOutlets: {
            $sum: {
              $map: {
                input: "$data",
                as: "city",
                in: { $size: "$$city.outlets" },
              },
            },
          },
        },
      },
      {
        $group: {
          _id: "$storeName",
          result: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: { newRoot: "$result" },
      },
    ]);

    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ detail: "Error occurred." });
  }
};

const getAllCities = async (req, res) => {
  try {
    const result = await DataModel.aggregate([
      {
        $unwind: "$data",
      },
      {
        $group: {
          _id: "$data.city",
          outlets: {
            $push: "$data.outlets.outletName",
          },
        },
      },
      {
        $group: {
          _id: null,
          cities: {
            $push: {
              cityName: "$_id",
              outletNames: "$outlets",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          cities: 1,
        },
      },
    ]);

    let response = {};
    result[0].cities.forEach((city) => {
      response[city.cityName] = city.outletNames[1];
    });
    // await new Promise(resolve => setTimeout(resolve,2000))
    return res.status(200).send(result[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send({ detail: "Somethings wrong." });
  }
};

const getOffers = async (req, res) => {
  const city = req.query.city;
  const outlet = req.query.outlet;
  const result = await DataModel.find({
    "data.city": city,
    "data.outlets.outletName": outlet,
  }).sort({
    createdAt: -1,
  });
  if (result?.[0]) {
    const offers = result[0].data
      .filter((i) => i.city === city)?.[0]
      ?.outlets.filter((i) => i.outletName === outlet)?.[0].offers;
    res.status(200).send(offers);
  } else {
    console.log("Outlet not found.");
  }
};

module.exports = { getAllCities, getOffers, getAllStores };
