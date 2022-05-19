const { Sequelize } = require('sequelize');
const dbConfig = require("./db.confing.js");

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false
});

module.exports = sequelize;
