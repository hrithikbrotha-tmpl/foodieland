const express = require("express");
const searchRouter = express.Router();
const searchController = require('./../controllers/search');
 
searchRouter.route('/').get(searchController.get);
module.exports = searchRouter;