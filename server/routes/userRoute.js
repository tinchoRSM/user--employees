const users = require("express").Router();
const employees = require("./employeeRoute.js");
const userControler = require("../controllers/userControler.js");


users.get("/:userId", userControler.getUserById);
users.use("/:userId/employees", employees);


module.exports = users;