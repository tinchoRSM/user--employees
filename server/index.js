const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/userRoute.js");
const dbInitilize = require("./database/db.initialize.js");

const User = require("./models/user.js");
const Employee = require("./models/employee.js");



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



// User.create({
//     email: "tinchoRSM@gmail.com",
//     password: "123456"
// }).then(console.log("User Created"));

// Employee.create({
//     name: "Ivan Petrov Andonov",
//     adress: "st. Vasil levski 13",
//     phone: "099885468",
//     department: "IT", 
//     position: "Designer",
//     salary: 3400,
//     userId: 1
// }).then(console.log("Employee created"));


// User.findByPk(1,{include: [Employee]}).then(data => console.log(JSON.stringify(data,null,2)))
// Employee.findAll().then(data => console.log(JSON.stringify(data,null,2)))


app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});