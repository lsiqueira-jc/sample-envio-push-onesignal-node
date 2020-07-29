const express = require("express");

const PushController = require("./controllers/PushController");

const routes = express.Router();

routes.get("/push", PushController.push);

module.exports = routes;
