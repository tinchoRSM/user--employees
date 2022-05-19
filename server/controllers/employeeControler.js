const getAllEmployees = (req,res) =>{
    message = `Getting all employees`;
    
    res.send({
        message: message
    });
}

const getEmployeeById = (req,res) =>{
    message = `Getting employee with id ${req.params.employeeId}`;

    res.send({
        message: message
    });
}

module.exports = {
    getAllEmployees,
    getEmployeeById

}