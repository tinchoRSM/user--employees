const {DataTypes} = require("sequelize");
const sequelize = require("../database/database.js")

const Employee = sequelize.define('employee',{
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Adress: {
        type: DataTypes.STRING,
        allowNull: false
    },   
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

module.exports = Employee;
