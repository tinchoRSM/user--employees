const { Sequelize } = require("sequelize");
const dbConfig = require("./db.confing.js")
const dbInitilize = require("./db.initialize.js")

const dbConnect = () =>{

    dbInitilize();
    
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

    connectToDb();

}

module.exports = dbConnect;