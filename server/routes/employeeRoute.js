const employeeRoute = require("express").Router();
const employeeControler = require("../controllers/employeeControler.js");

employeeRoute.post('/', employeeControler.getAllEmployees);
employeeRoute.post('/createEmployee', employeeControler.createEmployee);
employeeRoute.put('/editEmployeeById', employeeControler.getEmployeeById);
employeeRoute.delete('/', employeeControler.deleteEmployee);


module.exports = employeeRoute;
