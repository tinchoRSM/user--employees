const { DataTypes } = require("sequelize");

const employeeModel = {
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
};

module.exports = employeeModel;