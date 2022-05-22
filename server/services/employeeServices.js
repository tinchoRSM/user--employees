const Employee = require("../models/employee");

const createEmployee = async (employee) =>{

    try {
        const newEmployee = await Employee.create({
            name: employee.name,
            adress: employee.adress,
            phone: employee.phone,
            department: employee.department, 
            position: employee.position,
            salary: employee.salary,
            userId: employee.userId
        });

        return newEmployee.toJSON();

    } catch (error) {
        return -1;
    }
}

const updateEmployee = async (employeeId,data) =>{
    try {
        const updatedEmployee = await Employee.update(data,{
            where: {id: employeeId}
        });

        if(updatedEmployee == 1){
            return true;
        }

        return false;
    } catch (error) {
        return -1;
    }
}

const deleteEmployee = async (employeeId) =>{
    try {
        const deltedEmploey = await Employee.destroy({
            where: {id: employeeId}
        })

        console.log(deltedEmploey);

        return true;
    } catch (error) {
        return -1;
    }
}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee
}