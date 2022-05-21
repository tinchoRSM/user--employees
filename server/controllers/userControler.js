const userService = require("../services/userServices");


const createUser =  (req,res) =>{
    try {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }

        const createdUser = userService.createNewUser(newUser);

        res.send({message: createUser})
    } catch (error) {
        
    }
}

const loginUser = async (req,res) =>{
    try {
        
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        
        const login = await userService.checkEmailAndPassword(user);

        if(!login){
            throw new Error("Cound not log in");
        }
        message = "Succsefuly loged in!"
        res.send({message: message});
        
    } catch (error) {
        res.send({message: error.message});
    }
}

module.exports = {
    createUser,
    loginUser
}