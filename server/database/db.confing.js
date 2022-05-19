const dbConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_DB,
    dialect: "mysql"
    // pool: {
    //     max: 5,
    //     min: 0,
    //     aquire: 3000,
    //     idle: 10000
    // }
}

module.exports = dbConfig;