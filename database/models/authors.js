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
  return authors;
};
