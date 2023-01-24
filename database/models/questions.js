const { DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
   const questions = sequelize.define("questions" , {
              
                            id:{
                                type: DataTypes.INTEGER,
                                primaryKey:true,
                                autoIncrement:true
                            },
                            question:{
                                 type:DataTypes.TEXT,
                                 allowNull : false
                            },
                            answer:{
                                 type:DataTypes.TEXT,
                                 allowNull : false
                            }

});

return questions;
}