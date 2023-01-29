const db = require("../../database/models");

module.exports = {
  getTopRecipies: async (req, res) => {
    const topItems = await db.recipies.findAll();

    if (topItems) {
      res.status(200).json(topItems);
    } else {
      res.status(404).send("NO Blogs!");
    }
  },
  postTopRecipies: async (req, res) => {
    const { bannerImg, shortDescription, authorId } = req.body;
    const id =0;
    try {
      if (!bannerImg || !shortDescription || !authorId) {
        console.log(req.body);
        res.status(404).send("Enter full data");
      } else {
        id = id + 1;
        await db.recipies.create({
          id,
          bannerImg,
          shortDescription,
          authorId,
        });
        return res.status(200).send("Added");
      } }catch (err) {
      console.log("Error");
      return res.status(400).send({ error: err.message });
    }
  },
};
