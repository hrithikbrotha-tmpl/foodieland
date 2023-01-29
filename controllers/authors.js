const db = require("../database/models");

module.exports = {
  getData: async (req, res) => {
    const data = await db.authors.findAll();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send("Not Found");
    }
  },
  postData: async (res, req) => {
    const { name , authorImg } = req.body;
    if (!name || !authorImg) {
      res.send("Missing Content");
    } else {
      try {
        await db.authors.create({
          name,
          authorImg
        });
        res.status(200).send("Success");
      } catch (err) {
        //       console.log("Error");
        res.status(404).json(err);
      }
    }
  },
};
