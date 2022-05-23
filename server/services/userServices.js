const res = require("express/lib/response");
const Employee = require("../models/employee");
const User = require("../models/user");

const createDefaultUser = async () =>{
    try {
        const newDefaultUser = await User.create({
            email: "tinchoRSM@gmail.com",
            password: "123456"
        });
    
        return newDefaultUser.toJSON();
    } catch (error) {
        return -1;
    }
   
}

const createNewUser = async (user) =>{
    try {
        const newUser = await User.create({
            email: user.email,
            password: user.password
        });

        return newUser.toJSON();
    } catch (error) {
        return -1
    }
}

const checkEmailAndPassword = async (user) =>{
    try {
        const data = await User.findOne({
            where: {
                email: user.email,
                password: user.password
            }
        });

        if(data){
            return true;
        }
        return false;
    } catch (error) {
        return -1;
    }
    
}

const getAllEmployees = async (userId) =>{
    try {
        const employees = await User.findByPk(userId,{
            include: [Employee]
        })

        return employees.toJSON();
    } catch (error) {
        return -1;
    }

}


module.exports = {
    createDefaultUser,
    createNewUser,
    checkEmailAndPassword,
    getAllEmployees
}
