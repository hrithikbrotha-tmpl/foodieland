const express = require("express");
const subscribersController = require("../controllers/home/subscribers");
const subscribersRouter = express.Router();



console.log("WORKINGGGG🐷🐷")

subscribersRouter.get("/", subscribersController.gets);
subscribersRouter.post("/", subscribersController.posts); 


module.exports = subscribersRouter;