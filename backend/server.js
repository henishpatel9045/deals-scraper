const express = require("express");
const mongoose = require("mongoose");

const Scrape = require("./Scrapers/scrape");

const DB_URL = "mongodb://localhost:27017/sugarwallet";

const DataModel = require("./models/DataModel");
const router = require("./routes");

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  console.log(`unable to connect to database: ${url}`);
});

const app = express();

app.get("/scrape", async (req, res) => {
  const data = await Scrape();
  await DataModel.create({
    data: data,
  });
  res.status(201).send("Data Successfully scraped.");
});
app.use("/", router);

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
