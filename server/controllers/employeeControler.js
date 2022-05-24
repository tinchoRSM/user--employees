const userService = require("../services/userServices.js");
const employeeService = require("../services/employeeServices.js");


const sendUserEmployees = async (req,res) =>{
    try {
        const userId = req.body.userId;
        
        const employees = await userService.getAllEmployees(userId);
        
        res.send({message: employees.employees});
    } catch (error) {
        res.send({message: error.message});
    }
}

const getEmployee = async(req,res) => {
    try {
        const employeeId = req.body.employeeId;

        const employeeFound = await employeeService.getEmployeeById(employeeId);

        if(employeeFound < 0){
            throw new Error("Employee with that id not found.");
        }

        res.send({message: employeeFound});
    } catch (error) {
        res.send({message: error.message});
    }
}

const createEmployee = async (req,res) =>{
    try {
        const newEmployee = {
            name: req.body.name,
            adress: req.body.adress,
            phone: req.body.phone,
            department: req.body.department, 
            position: req.body.position,
            salary: req.body.salary,
            userId: req.body.userId
        }

        const createdEmployee = await employeeService.createEmployee(newEmployee);

        res.send({message: createdEmployee});
    } catch (error) {
        res.send({message: error.message});
    }
}


const updatedEmployee = async(req,res) =>{
    try {
        const employeeId = req.body.id;

        const changedData = {
            data: req.body.data
        }

        const updatedEmployee= await employeeService.updateEmployee(employeeId,changedData.data);

        if(updatedEmployee < 0){
            throw new Error("Update employee failed");
        }

        res.send({message: "Update succssesfull"});
    } catch (error) {
        res.send({message: error.message});
    }
}


const deleteEmployee = async (req,res) =>{
    try {
        const employeeId = req.params.id;

        const deletedEmployee = await employeeService.deleteEmployee(employeeId);

        if(deletedEmployee < 0){
            throw new Error("Deleting employee failed")
        }

        res.send({message: "Deleted succsesfull"})
    } catch (error) {
        res.send({message: error.message});
    }
}

module.exports = {
    sendUserEmployees,
    updatedEmployee,
    createEmployee,
    getEmployee,
    deleteEmployee

}