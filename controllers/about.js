const db = require("../database/models");

module.exports = {
  getContent: async (req, res) => {
    const content = await db.about.findAll();
    if (content) {
      res.status(200).json(content);
    } else {
      res.status(404).send("NO Blogs!");
    }
  },
  postContent: async (req, res) => {
    const { img, content } = req.body;
    if (!img || !content) {
      res.send("Data Incompelete!");
    } else {
      try {
        let r = await db.about.create({
          img,
          content,
        });
        return res.status(200).send("Added");
      } catch (err) {
        console.log("Error");
        return res.status(404).json(err);
      }
    }
  },
};
