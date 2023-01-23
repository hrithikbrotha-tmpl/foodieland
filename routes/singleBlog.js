const express = require("express");
const sRouter = express.Router();
const singleBlogController = require("../controllers/singleBlog");
// var bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());

sRouter.route("/").get( singleBlogController.singleBlog);

module.exports = sRouter;
