const Sequelize = require("sequelize");
const db = require('./../database/models');
module.exports = {
  searchBlogs: async (req, res) => {
    try {
      let q = req.query.q;
      console.log(q);
      if (q != "") {
        let bgs = await db.blogs.findAll({
          where: { title: { [Sequelize.Op.iLike]: `%${q}%` } },
        });
        console.log(bgs);
        if (bgs != []) {
          return res.send(bgs);
        } else {
          res.status(200).send("No Match found");
        }
      } else {
        res.send([]);
      }
    } catch (error) {
      console.log(error);
    }
  },
};






























// const { Op } = require("sequelize");

// module.exports = {
// searchBlogs:(req,res) => {
//   let search = {};
//   let q = req.query.keyword;
//   if (q) {
//     search = {
//       where: {
//         title: {
//           [Op.iLike]: `%${q}%` 
//         },
//       },
//     };
//   }
//   if(search){
//   db.blogs.findAll(search).then((items) => {
//     res.json(items);
//   });
// }
// else{
//               res.status(400).send("Nothing here!");
// }
// }

// };

// const { Op } = require("sequelize");
// const db = require("../database/models");
// module.exports = {
//   searchBlogs: async (req, res) => {
//     try {
//       // if param is not passed
//       if (!req.query.keyword) {
//         return res
//           .status(400)
//           .json({ message: "keyword parameter is missing" });
//       }

//       const keyword = req.query.keyword;
//       const results = await db.blogs.findAll({
//         where: {
          
//             title: { [Op.iLike]: `%${keyword}%` },
        
//         },
//         attributes: ["id", "title"],
//       });

//       if (results.length === 0) {
//         return res.status(404).json({ message: "No match found!" });
//       }
//       res.status(200).json(results);
//     } catch (err) {
//       res.status(500).json({ message: `Error Searchin: ${err}` });
//     }
//   },
// };

// const db = require("../database/models");
// const blogs = require("../database/models/blogs");
