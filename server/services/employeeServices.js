const res = require("express/lib/response")
const Employee = require("../models/employee");


const createEmployee = async (employee) =>{

    try {
        
        const newEmployee = Employee.create({
            name: employee.name,
            adress: employee.adress,
            phone: employee.phone,
            department: employee.department, 
            position: employee.position,
            salary: employee.salary
        });



    } catch (error) {
        res.send({message: error.message});
    }
    
}

module.exports = {
    createEmployee
}