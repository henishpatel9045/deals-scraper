const DataModel = require("../models/DataModel");

const getAllCities = async (req, res) => {
  const data = await DataModel.find();
  res.status(200).send(data);
};

module.exports = { getAllCities };
