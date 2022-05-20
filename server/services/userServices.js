const res = require("express/lib/response");
const Employee = require("../models/employee");
const User = require("../models/user");

const createDefaultUser = async () =>{

    try {
        const newUser = await User.create({
            email: "tinchoRSM@gmail.com",
            password: "123456"
        });
    
        return newUser.toJSON();
    } catch (error) {
        return -1;
    }
   
}

const loginComfirm = async (user) =>{
    
    try {
        const data = await User.findAll({
            where: {
                email: user.email,
                password: user.password
            }
        });

        if(data.length > 0){
            return true;
        }
        
        return false;
    } catch (error) {
        return false;
    }
    
}

const getAllEmployees = async (userId) =>{

    try {
        const employees = await User.findByPk(userId,{
            include: Employee
        })

        return JSON.stringify(employees, null, 2);
    
    } catch (error) {
        return -1;
    }

}


module.exports = {
    createDefaultUser,
    loginComfirm,
    getAllEmployees
}
