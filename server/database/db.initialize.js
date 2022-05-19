const mysql = require("mysql2");

const dbInitilize = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    
    try {
        connection.query(`CREATE DATABASE IF NOT EXISTS UserEmployees`);

    } catch (error) {
        throw new Error("Could not create base db");
    }
    
    connection.end;
}

module.exports = dbInitilize;