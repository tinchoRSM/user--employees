const userService = require("../services/userServices");


const createUser =  (req,res) =>{
    try {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }

        const createdUser = userService.createNewUser(newUser);

        res.send({message: createdUser})
    } catch (error) {
        res.send({message: error.message});
    }
}

const loginUser = async (req,res) =>{
    try {
        
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        
        const loginUser = await userService.checkEmailAndPassword(user);

        if(loginUser < 0){
            throw new Error("failed");
        }
        res.send({message: loginUser});
        
    } catch (error) {
        res.send({message: error.message});
    }
}

module.exports = {
    createUser,
    loginUser
}