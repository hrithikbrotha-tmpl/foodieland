const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const authors = sequelize.define("authors", {
    id: {
      type: DataTypes.INTEGER,
    //   defaultValue: DataTypes.UUIDV4,
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
  authors.associate = (models) => {
    models.authors.hasMany(models.blogs, { foriegnKey: "authorId" });
  };

  authors.associate = (models) => {
    models.authors.hasMany(models.recipies, { foriegnKey: "AuthorId" });
  };
  return authors;
};
