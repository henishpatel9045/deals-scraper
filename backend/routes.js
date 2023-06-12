const express = require("express");
const dataController = require("./controllers/DataController");

const router = express.Router();

router.route("/:store").get(dataController.getAllCities);
router.route("/:store/:city/:outlet").get(dataController.getAllCities);
router.route("/auth/login").get(dataController.getAllCities);
router.route("/auth/register").get(dataController.getAllCities);

module.exports = router;
