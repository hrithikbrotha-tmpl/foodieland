const db = require('../database/models');

module.exports = {

  getContent: async (req, res) => {
//     const content = await db.about.findAll();
//     if (content) {
//       res.status(200).json(content);
//     } else {
//       res.status(404).send("NO Blogs!");
//     }
     console.log("oK");
  },
//   postContent: async (req, res) => {
//     const { img , content } = req.body;
//     try {
//       let r = await db.about.create({
//         img,
//         content,
//       });
//       return res.status(200).json(r);
//     } 
//     catch (err) {
//       console.log("Error");
//       return res.status(404).json(err);
//     }
//   },
};