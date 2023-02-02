const db = require("../database/models");

module.exports = {
  singleBlog: async (req, res) => {
    console.log(req.params.id);
    try {
      let id  = req.params.id;
      let blog = await db.blogs.findAll({
        where: { id },
        include: [
          {
            model: db.authors,
          },
        ]
      });
      console.log(blog);
      if (blog != null) {
        res.json(blog);
      }
      else{
        res.send("No discription");
      }
    } catch (error) {
        console.log(error)
      res.status(404).send("Select a particular blog to see details!");
    }
  },
};
