const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const recipies = sequelize.define("recipies", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      auto_Increment: true,
    },
    bannerImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
    fullDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    AuthorId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  });

  return recipies;
};
