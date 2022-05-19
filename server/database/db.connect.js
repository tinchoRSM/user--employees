const { Sequelize } = require("sequelize");
const dbConfig = require("./db.confing.js");
const dbInitilize = require("./db.initialize.js");

const userModel = require("../models/userModel.js");
const employeeModel = require("../models/employeeModel.js");
const { chainPropTypes } = require("@mui/utils");


const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const connectToDb = async() =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } 
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const User = sequelize.define("User", userModel);
const Employee = sequelize.define("Employee", employeeModel);

User.hasMany(Employee);
Employee.belongsTo(User);

const db = {
    user: User,
    employee: Employee,
    connectToDb: connectToDb,
    dbInitilize: dbInitilize
}

module.exports = db;