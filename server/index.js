const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/userRoute.js");
const dbInitilize = require("./database/db.initialize.js");

const User = require("./models/user.js");
const Employee = require("./models/employee.js");

Employee.create({
    name: "Stoyqn Petrov Andonov",
    adress: "st. Vasil levski 13",
    phone: "099885468",
    department: "IT", 
    position: "Designer",
    salary: 3400,
    userId: 2
}).then(console.log("employee created"));

Employee.findAll().then(data => console.log(JSON.stringify(data,null,2)))

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use("/users",userRouter);


dbInitilize();

User.hasMany(Employee);
Employee.belongsTo(User);

User.sync();
Employee.sync();



app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});