const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const authors = sequelize.define("authors", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
//       auto_Increment: true,
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
  // authors.hasMany()   ---ASSOCIATEIONS
  return authors;
};