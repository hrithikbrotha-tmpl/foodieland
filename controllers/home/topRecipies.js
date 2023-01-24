const db = require("../../database/models/recipies");

module.exports = {
  getTopRecipies: async (req, res) => {
    const topItems = await db.findAll();

    if (topItems) {
      res.status(200).json(topItems);
    } else {
      res.status(404).send("NO Blogs!");
    }
  },
  postTopRecipies: async (res, req) => {
    const { bannerImg, shortDescription, fullDescription } = req.body;

    if (!bannerImg || !shortDescription || !fullDescription) {
      res.send("ERROR!");
    } else {
      try {
        const items = await db.create({
          bannerImg,
          shortDescription,
          fullDescription,
        });
        return res.status(200).json({ items });
      } catch (err) {
        console.log("Error");
        return res.status(400).json({ error: err.message });
      }
    }
  },
};
