const search = require('./../database/models');

module.exports = {
get:(req,res) => {
  let search = {};
  let{ q }= req.query;
  if (q) {
    search = {
      where: {
        title: {
          [Sequelize.op.like]: "${q}%",
        },
      },
    };
  }
  if(search === {}){
  db.findAll(search).then((items) => {
    res.json({items});
  });
}
else{
              res.status(401).send("Nothing here!");
}
}
};