const express = require("express");
const sRouter = express.Router();
const singleBlogController = require("../controllers/singleBlog");


sRouter.route("/").get( singleBlogController.singleBlog);

module.exports = sRouter;
