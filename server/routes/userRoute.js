const usersRoute = require("express").Router();
const employeeRoute = require("./employeeRoute.js");
const userControler = require("../controllers/userControler.js");


//usersRoute.get("/:userId", userControler.getUserById);
usersRoute.post("/login", userControler.loginUser)
usersRoute.use("/:userId/employees", employeeRoute);


module.exports = usersRoute;