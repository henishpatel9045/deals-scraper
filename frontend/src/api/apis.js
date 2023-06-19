import * as apisauce from "apisauce";

const api = apisauce.create({
  baseURL: "https://api-sugarwallet.onrender.com/",
  // baseURL: "http://localhost:5000/"
});

const getToken = async (username, password) => {
  const data = await api.post("auth/login", {
    username: username,
    password: password,
  });

  if (!data.ok) {
    console.log("getToken: ", data.status, data.data);
  }
  return data.data;
};

const createUser = async (username, password) => {
  const data = await api.post("auth/register", {
    username: username,
    password: password,
  });

  if (!data.ok) {
    console.log("createUser: ", data.status, data.data);
  }
  return data.data;
};

const updateCity = async (token, city, outlet="") => {
  const data = await api.patch(
    "auth/user",
    {
      tag: "Henish",
      city: city,
      outlet: outlet
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!data.ok) {
    console.log("updateCity", data.status, data.data);
  }
  return data.data;
};

const getAllCities = async () => {
  const data = await api.get("cities");

  if (!data.ok) {
    console.log(data.status, data.data);
  }
  let response = {}
  data.data?.cities.forEach((city) => {
    response[city.cityName] = city.outletNames[0];
  });
  return response;
};

const getStores = async () => {
  const data = await api.get("store");

  if (!data.ok) console.log("getStore: ", data.status, data.data);

  return data.data;
};

const getOffers = async (city, outlet) => {
  let url = "?city=" + city + "&outlet=" + outlet;
  url.replace(" ", "%20");

  const data = await api.get("/store/offers" + url);
  console.log(data.data);
  if (!data.ok) console.log("getOffers: ", data.status, data.data);

  return data.data;
};

export { getToken, createUser, updateCity, getAllCities, getOffers, getStores };
