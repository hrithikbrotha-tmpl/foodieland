const { DataTypes } = require("sequelize");
module.exports = (sequelize, Datatypes) => {
  const subscribers = sequelize.define("subscribers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      auto_Increment: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: true,
      },
    },
  });
  return subscribers;
};
