const userService = require("../services/userServices.js");
const employeeService = require("../services/employeeServices.js");

const getAllEmployees = async(req,res) =>{
   
    try {
        
        const userId = req.body.userId;

        const employees = await userService.getAllEmployees(userId);

        if (employees < 0) {
            throw new Error("There are no employees to that user");
        }

        res.send({message: employees});
        

    } catch (error) {
        res.send({message: error.message});
    }


}

const getEmployeeById = (req,res) =>{
    message = `Getting employee with id ${req.params.employeeId}`;

    res.send({
        message: message
    });
}

const createEmployee = (req,res) =>{


}

const deleteEmployee = (req,res) =>{

}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    deleteEmployee

}