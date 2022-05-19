const userController = require("../services/userServices");


const getUserById =  (req,res) =>{
    message = `Getting user by id ${req.params.userId}`;
    
    res.send({message: message});
}

const loginUser = async (req,res) =>{

    try {

        const user = {
            email: req.body.email,
            password: req.body.password
        }
        
        const login = await userController.loginComfirm(user);

        if(!login){
            throw new Error("Cound not log in");
        }

        message = "Succsefuly loged in!"
        res.send({message: message});
        
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getUserById,
    loginUser
}