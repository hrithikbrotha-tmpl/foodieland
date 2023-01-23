const express = require("express");
const blogsRouter = express.Router();
const blogsController = require("../controllers/home/blogs&recipies");
// var bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());

blogsRouter.get("/", blogsController.getBlogs);
blogsRouter.post("/", blogsController.postBlogs);

// router.get("/topRecipies", topRecipies.getTopRecipies);

// router.post("/topRecipies", topRecipies.postTopRecipies);

// module.exports = topRecipies;

module.exports = blogsRouter;