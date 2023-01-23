const db = require('./../../database/models');

// const express = require("express");
// const uuid = require('uuid');
// const db2 = require("../models/recipies");


module.exports = {
  //getAllBlogs
  getBlogs: 
  async (req, res) => {
              
              // res.status(200).send("Yo Man! I'm working")

              // let search = {};
              // let{ q }= req.query;
              // if (q) {
              //   search = {
              //     where: {
              //       title: {
              //         [Sequelize.op.like]: "${q}%",
              //       },
              //     },
              //   };
              // }

              // db.findAll(search).then((items) => {
              //   res.json({items});
              // });

    const allBlogs = await db.blogs.findAll();
    if(allBlogs){
    res.status(200).json(allBlogs);
}
    else{
              res.status(404).send("NO Blogs!")
    }

  },
  //createBlogs
  postBlogs: async (req, res) => {
    const { title, shortDescription, fullDescription, bannerImg , category} = req.body;
    try {
      await db.blogs.create({
        title,
        shortDescription,
        fullDescription,
        bannerImg,
        category,
      });
      return res.status(200).send("DONE!");
    }
    catch (err) {
      console.log("Error");
      return res.status(400).send( err );
    }
  },
};