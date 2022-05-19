const employeeRoute = require("express").Router();
const employeeControler = require("../controllers/employeeControler.js");

employeeRoute.get('/', employeeControler.getAllEmployees);
employeeRoute.get('/:employeeId', employeeControler.getEmployeeById);


module.exports = employeeRoute;
