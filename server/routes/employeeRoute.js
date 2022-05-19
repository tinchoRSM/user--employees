const employees = require("express").Router();
const employeeControler = require("../controllers/employeeControler.js");

employees.get('/', employeeControler.getAllEmployees);
employees.get('/:employeeId', employeeControler.getEmployeeById);


module.exports = employees;
