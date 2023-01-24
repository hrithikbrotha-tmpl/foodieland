const db = require("../database/models"); 

 module.exports = {
   singleBlog: (req, res) => {
     let {id} = req.params;
    db.blogs.findByPk(id).then((blog) => {
              if(blog){
                            res.json({blog:blog});
              }
              else{
                            res.status(404).send("NO BLOGS FOUND");
              }
    });
}
 };
