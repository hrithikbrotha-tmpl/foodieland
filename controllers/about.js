const db = require("../database/models");

module.exports = {
  getContent: async (req, res) => {
    const content = await db.about.findAll();
    if (content.length) {
      res.status(200).json(content);
    } else {
      res.status(404).send("Hi there this is about page.... You are welcome!");
    }
  },
  postContent: async (req, res) => {
    const { bannerImg , content } = req.body;
     try {
    if (!bannerImg || !content) {
      res.send("Data Incompelete!");
    } else {
        await db.about.create({
          bannerImg,
          content,
        });
        return res.status(200).send("Added");
    }
      } catch (err) {
        console.log("Error");
        return res.status(404).json(err);
      }
  },
};
