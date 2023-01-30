const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const authors = sequelize.define("authors", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      auto_Increment: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    authorImg: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
 authors.associate = function (models) {
   models.authors.hasMany(models.blogs, { foreignKey: "authorId" });
 };
  return authors;
};
