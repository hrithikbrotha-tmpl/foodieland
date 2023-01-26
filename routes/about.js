const express = require("express");
const aboutController = require("../controllers/about");
const aboutRouter = express.Router();

aboutRouter.post("/", aboutController.postContent);
aboutRouter.get("/", aboutController.getContent);

module.exports = aboutRouter;