const db = require("./../../database/models");

module.exports = {
  //getAllBlogs
  getBlogs: async (req, res) => {
    // pagination
    let perPage = parseInt(req.query.perPage) || 4;
    let pageNo = parseInt(req.query.pageNo) || 1;

    let offset = perPage * (pageNo - 1);
    
    let allBlogs = await db.blogs.findAll({
      offset,
      limit: perPage,
      include: [
        {
          model: db.authors,
        },
      ],
    });

    // console.log(allBlogs);

    //total pages
    let totalPosts = await db.blogs.findAll();
    totalPosts = totalPosts.length;

    // topItems/rec
    let topItems = await db.recipies.findAll();
    topItems = topItems.length;

    let totalPages = [];
    console.log(totalPosts);
    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
      totalPages.push(i);
    }

    
    if(topItems === 0){
        let response = { allBlogs,totalPages };
        res.status(200).json(response);
    }
    else{
        let response = { allBlogs, topItems, totalPages };
        return res.status(200).json(response);
    }
  },

  //createBlogs

  postBlogs: async (req, res) => {
    const { title, shortDescription, fullDescription, bannerImg } = req.body;
    try {
      if (
        !title ||
        !shortDescription ||
        !fullDescription ||
        !bannerImg
        //   !authorId
      ) {
        res.status(404).send("Content Missing!");
      } else {
        await db.blogs.create({
          title,
          shortDescription,
          fullDescription,
          bannerImg,
          //   authorId,
        });
        return res.status(200).send("DONE!");
      }
    } catch (err) {
      console.log("Error");
      return res.status(400).send(err);
    }
  },
};
