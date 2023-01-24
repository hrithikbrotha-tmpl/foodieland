const db = require("./../../database/models");

module.exports = {
  //getAllBlogs
  getBlogs: async (req, res) => {
    const allBlogs = await db.blogs.findAll();
    if (allBlogs.length) {
      res.status(200).json({allBlogs : allBlogs});
    } else {
      res.status(404).send("NO Blogs!");
    }
  },

  //createBlogs

  postBlogs: async (req, res) => {
    const { title, shortDescription, fullDescription, bannerImg, authorId } =
      req.body;

    if (
      !title ||
      !shortDescription ||
      !fullDescription ||
      !bannerImg ||
      !authorId
    ) {
      res.status(404).send("Content Missing!");
    } else {
      try {
        await db.blogs.create({
          title,
          shortDescription,
          fullDescription,
          bannerImg,
          authorId,
        });
        return res.status(200).send("DONE!");
      } catch (err) {
        console.log("Error");
        return res.status(400).send(err);
      }
    }
  },
};
