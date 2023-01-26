const express = require("express");
const sRouter = express.Router();
const singleBlogController = require("../controllers/singleBlog");


sRouter.route("/:id").get(singleBlogController.singleBlog);

module.exports = sRouter;