const { where } = require("sequelize");
const db = require("../database/models"); 

 module.exports = {

   singleBlog: async (req, res) => {
    try { 
        let {id} = req.query;
       let blog = await db.blogs.findOne({where:{id:id}})
        console.log(blog)
                 if(blog != null){
                               res.json({blog:blog});
                 }
    } catch (error) {
        res.status(404).send(error.message)
    }
}
 };
