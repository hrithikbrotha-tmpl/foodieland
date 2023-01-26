const { DataTypes } = require("sequelize");
module.exports = (sequelize, Datatypes) => {
  const subscribers = sequelize.define("subscribers", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      //   auto_Increment: true,
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull:false,
      validate: {
        isEmail: true,
      },
    },
  });
  return subscribers;
};
