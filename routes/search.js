const express = require("express");
const searchRouter = express.Router();
const searchController = require('../controllers/search');
 
searchRouter.route('/').get(searchController.searchBlogs);
module.exports = searchRouter;