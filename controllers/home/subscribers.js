const db = require("../../database/models");
// const express = require("express");

module.exports = {
  see: async (req, res) => {
    let s = await db.subscribers.findAll();
    console.log("❤️‍🔥❤️‍🔥❤️‍🔥");
    res.status(200).json(s);
  },
  add: async (req, res) => {
      const {email} = req.body;
    try {
    if (!email) {
      res.status(404).send("Enter email!");
    } 
    else{
        const sub = db.subscribers.findAll( {email :email} );
        if(sub){
           db.subscribers.create({email: email})
           res.status(200).send("ADDED");
    }
    else{
        res.status(500).send("User already subscribed !")
    }
    }
} catch (error) {
  res.status(500).send(error);
}
  },
};
