const db = require("../../database/models");
// const express = require("express");

module.exports = {
  gets: async (req, res) => {
    let s = await db.subscribers.findAll();
    console.log("❤️‍🔥❤️‍🔥❤️‍🔥");
    res.status(200).json(s);
  },
  posts: async (req, res) => {
    const mail = req.body.email;
    if (!mail) {
      res.status(401).send("Enter email!");
    } else {
      const re = await db.subscribers.findOne({ where: { email: mail } });
      try {
        if (re) {
          res.status(401).send("User already subscribed");
        } else {
          db.subscribers.create(mail);
          res.status(200).send("Subscribed");
        }
      } catch (error) {
        res.send(error);
      }
    }
  },
};

