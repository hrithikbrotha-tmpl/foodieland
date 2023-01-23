const express = require("express");
const topRecipiesController = require("../controllers/home/topRecipies");
const topRecipiesRouter = express.Router();

topRecipiesRouter.get("/topRecipies", topRecipiesController.getTopRecipies);

topRecipiesRouter.post("/topRecipies", topRecipiesController.postTopRecipies);

module.exports = topRecipiesRouter;