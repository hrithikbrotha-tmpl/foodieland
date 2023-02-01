const db = require("../../database/models");
// // const express = require("express");

// module.exports = {
    //   add: async (req, res) => {
        //     const email  = req.body.email;
        //      try {
            //       if(email!=""){
                //         let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                //         if (email.match(regex)){
                    //             let Data = {};
                    //             if(email){
                        //                 Data.email = email;
                        //             }
                        //         }
                        //         const response=db.subscribers.create(Data);
                        //         return res.status(200).json(response)
                        //       }
                        //     }
//     catch(err){
//     res.status(400).send({err})
//     }
// }};



// //     try {
    // //       if (!email) {
        // //         res.status(404).send("Enter email!");
        // //       } else if (email) {
            // //         email === String(email).toLowerCase();
            // //         res.send("Invalid Email!");
            // //       } else {
                // //         const sub = db.subscribers.findOne({ where: { email } });
                // //         if (!sub) {
                    // //           db.subscribers.create({ email: email });
                    // //           res.status(200).send("ADDED");
                    // //         } else {
                        // //           res.status(500).send("User already subscribed !");
                        // //         }
                        // //       }
                        // //     } catch (error) {
                            // //       res.status(500).send(error);
                            // //     }
                            // //   },
                            
                            // const db = require("../database/models");
                            // const nodeMailer = require("nodemailer");
                            // const feedback = require("../database/models/feedback");
module.exports = {
                                  see: async (req, res) => {
                                    let s = await db.subscribers.findAll();
                                    console.log("❤️‍🔥❤️‍🔥❤️‍🔥");
                                    res.status(200).json(s);
                                  },
                                // change name to createSubscriber
                                add: async (req, res) => {
                                    // if else ?
                                    console.log(req.body);
                                    const { firstName, lastName, email, reviews } = req.body;
                                    
                                    try {
                                        if (req.body.email && req.body.email != "") {
                                            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                            if (email.match(regex)) {
          let Data = {};
          
          if (req.body.firstName) {
              Data.firstName = firstName;
            }
            if (req.body.lastName) {
            Data.lastName = lastName;
          }
          if (req.body.email) {
            Data.email = email;
          }
          if (req.body.reviews) {
            Data.reviews = reviews;
          }
          console.log(Data);
          const response = await db.subscribers.create(Data);
          return res.status(200).json(response);
        } else {
          res.status(400).send("Please enter correct email");
        }
      } else {
        return res.status(404).send("Enter Email address");
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};