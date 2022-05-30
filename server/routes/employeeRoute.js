const employeeRoute = require("express").Router();
const employeeControler = require("../controllers/employeeControler.js");
const { protect } = require("../middleware/auth.js");

employeeRoute.post('/', protect, employeeControler.sendUserEmployees);
employeeRoute.post('/getEmployee', protect, employeeControler.getEmployee);
employeeRoute.post('/createEmployee',protect, employeeControler.createEmployee);
employeeRoute.put('/editEmployee', protect, employeeControler.updatedEmployee);
employeeRoute.delete('/deleteEmployee/:id', protect, employeeControler.deleteEmployee);


module.exports = employeeRoute;
