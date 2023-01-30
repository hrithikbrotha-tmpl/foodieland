const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {
  const recipies = sequelize.define("recipies", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      auto_Increment: true,
    },
    bannerImg: {
      type: DataTypes.STRING,
      //   allowNull: false,
      unique: true,
    },
    shortDescription: {
      type: DataTypes.TEXT,
      //   allowNull: false,
      unique: true,
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      //   allowNull:false
    },
  });
  recipies.associate = function (models) {
    models.recipies.belongsTo(models.authors, { foreignKey: "AuthorId" });
  };
  return recipies;
};
