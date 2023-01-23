const express = require("express");
const authorsRouter = express.Router();
const authorsController = require("../controllers/authors");

// var bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());

// console.log("route🔥");

authorsRouter.get("/", authorsController.getData);
authorsRouter.post("/", authorsController.postData);

module.exports = authorsRouter;
