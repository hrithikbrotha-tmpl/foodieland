'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'/../config/config.js'))[env];
const db = {};

let sequelize;
let db_uri = process.env.DB_URI

//if using cloud db locally
// if (config.db_uri) {
//     console.log("cloud db is running...");
//     console.log("cloud db is running...");
//     console.log("cloud db is running...");
//     sequelize = new Sequelize(config.db_uri);

// if using cloud db on cloud
if (db_uri){
    sequelize = new Sequelize(db_uri)
    console.log("Connected to the database!")
} else {
    console.log("local db is running...");
    console.log("local db is running...");
    console.log("local db is running...");

  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;