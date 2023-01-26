const express = require("express");
const subscribersRouter = express.Router();
const subscribersController = require("../controllers/home/subscribers");



console.log("WORKINGGGG🐷🐷")

subscribersRouter.get("/", subscribersController.see);
subscribersRouter.post("/", subscribersController.add); 


module.exports = subscribersRouter;
