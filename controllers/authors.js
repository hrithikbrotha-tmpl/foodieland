const db = require("./../database/models");

module.exports ={
  getData :  async (req, res) => {
    const data = await db.authors.findAll();
    if (data) {
      res.status(200).json({data});
    } else {
      res.status(404).send("Not Found");
    }
  },
  postData : async (res, req) => {
    try {
      const { author, img } = req.body;

      await db.authors.create({
        author,
        img,
      });
       res.status(200).send("Success");
    } catch (err) {
//       console.log("Error");
      res.status(404).json(err);
    }
  },
};
