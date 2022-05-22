const employeeRoute = require("express").Router();
const employeeControler = require("../controllers/employeeControler.js");

employeeRoute.post('/', employeeControler.sendUserEmployees);
employeeRoute.post('/createEmployee', employeeControler.createEmployee);
employeeRoute.put('/editEmployee', employeeControler.updatedEmployee);
employeeRoute.delete('/', employeeControler.deleteEmployee);


module.exports = employeeRoute;
