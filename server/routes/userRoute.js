const usersRoute = require("express").Router();
const employeeRoute = require("./employeeRoute.js");
const userControler = require("../controllers/userControler.js");


//usersRoute.get("/:userId", userControler.getUserById);
usersRoute.post("/login", userControler.loginUser);
usersRoute.post("/create", userControler.createUser)
usersRoute.use("/employees", employeeRoute);


module.exports = usersRoute;