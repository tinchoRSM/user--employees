const employeeRoute = require("express").Router();
const employeeControler = require("../controllers/employeeControler.js");

employeeRoute.post('/', employeeControler.sendUserEmployees);
employeeRoute.post('/getEmployee', employeeControler.getEmployee);
employeeRoute.post('/createEmployee', employeeControler.createEmployee);
employeeRoute.put('/editEmployee', employeeControler.updatedEmployee);
employeeRoute.delete('/deleteEmployee/:id', employeeControler.deleteEmployee);


module.exports = employeeRoute;
