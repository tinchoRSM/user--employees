const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/userRoute.js");
const errorHandler = require("./utils/erorHandler.js")
const db = require("./database/db.connect.js");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/users",userRouter);

db.dbInitilize();
db.connectToDb();

app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});