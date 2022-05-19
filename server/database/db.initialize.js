const mysql = require("mysql2");

const dbInitilize = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    
    connection.query(
        `CREATE DATABASE IF NOT EXISTS UserEmployees`, (err,results) =>{ 
            console.log("DB Intilized");
            console.log("No eror");
    
        }
    );
    
    connection.end;
}

module.exports = dbInitilize;