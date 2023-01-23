const db = require("../../database/models");
// const express = require("express");

module.exports = {
  gets: async(req, res)=>{
              console.log("❤️‍🔥❤️‍🔥❤️‍🔥");
              res.status(200).send("❤️‍🔥❤️‍🔥❤️‍🔥");
  },
  posts: async (req, res) => {
    let { mail } = req.body;
    if (
      await db.subs.findOne({
        where: {
          email: mail,
        },
      })
    ) {
      res.status(404).json("User already subscribed");
    } else {
      db.subscribers.create(mail);
      return res.status(200).json("Subscribed");
    }
  }
};