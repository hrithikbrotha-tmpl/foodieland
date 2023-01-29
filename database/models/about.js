module.exports = (sequelize , Datatypes) => {
              const about = sequelize.define("about" , {
                     bannerImg : {
                            type: Datatypes.STRING,
                            // allowNull:false,
                     },    
                     content:{
                            type:Datatypes.TEXT,
                            // allowNull:false,
                     }
              });
              return about;
};