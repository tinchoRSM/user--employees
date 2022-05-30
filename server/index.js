const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/userRoute.js");
const dbInitilize = require("./database/db.initialize.js");

const User = require("./models/user.js");
const Employee = require("./models/employee.js");
const { createDefaultUser } = require("./services/userServices.js");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use("/users",userRouter);


dbInitilize();


User.hasMany(Employee, { foreignKey: 'userId' });
Employee.belongsTo(User);

User.sync();
Employee.sync();

createDefaultUser();
//email: "tinchoRSM@gmail.com",
//password: "123456"


app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});