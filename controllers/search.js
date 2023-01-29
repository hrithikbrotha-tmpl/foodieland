// const search = require('./../database/models');

// module.exports = {
// get:(req,res) => {
//   let search = {};
//   let{ q }= req.query;
//   if (q) {
//     search = {
//       where: {
//         title: {
//           [Sequelize.op.like]: "${q}%",
//         },
//       },
//     };
//   }
//   if(search === {}){
//   db.findAll(search).then((items) => {
//     res.json({items});
//   });
// }
// else{
//               res.status(401).send("Nothing here!");
// }
// }

const {Op} = require('sequelize')
const db = require("../database/models");

module.exports = {
    searchBlogs: async (req, res) => {
        try{
            if(!req.query.keyword) {
                return res.status(400).json({ message: 'keyword parameter is missing' });
            }

            const keyword = req.query.keyword;
            const results = await db.blogs.findAll({
                where: {title: {[Op.iLike]: `%${keyword}%`}}
            })

            if (results.length === 0) {
                return res.status(404).json({message: 'No match found!'})
            }
            res.status(200).json(results);

        } catch (err){
            res.status(500).json({message: err})
        }
    }
}
// };