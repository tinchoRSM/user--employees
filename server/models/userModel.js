const { DataTypes } = require("sequelize");

const userModel = {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

module.exports = userModel;