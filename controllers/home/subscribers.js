const db = require("../../database/models");
// const express = require("express");

module.exports = {
  gets: async (req, res) => {
    console.log("❤️‍🔥❤️‍🔥❤️‍🔥");
    res.status(200).send("❤️‍🔥❤️‍🔥❤️‍🔥");
  },
  posts: async (req, res) => {
    const mail  = req.body;
    const re = await db.subscribers.findOne({
      where: {
        email : mail,
      }
})
    if(re){
               res.status(401).json("User already subscribed");
    }else {
      db.subscribers.create(mail);
      return res.status(200).send("Subscribed");
    }
  },
};
