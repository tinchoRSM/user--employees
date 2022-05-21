const userService = require("../services/userServices.js");
const employeeService = require("../services/employeeServices.js");


const sendUserEmployees = async (req,res) =>{
    try {
        const userId = req.body.userId;

        const employees = await userService.getAllEmployees(userId);

        console.log(employees); 

        res.send(employees.employees);
    } catch (error) {
        res.send({message: error.message})
    }
}

const getEmployeeById = (req,res) =>{

}

const createEmployee = (req,res) =>{

}

const deleteEmployee = (req,res) =>{

}

module.exports = {
    sendUserEmployees,
    getEmployeeById,
    createEmployee,
    deleteEmployee

}