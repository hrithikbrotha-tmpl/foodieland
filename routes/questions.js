const express = require("express");
const qController = require("../controllers/questions");
const qRouter = express.Router();

qRouter.get("/", qController.getContent);

module.exports = qRouter;