// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
              
  const blogs = sequelize.define("blogs", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
//       auto_Increment: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    fullDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bannerImg: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }   
});
 blogs.associate = function (models) {
   models.blogs.belongsTo(models.authors, { foreignKey: "authorId" });
 };
return blogs;
};