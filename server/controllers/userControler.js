const userService = require("../services/userServices");
const jwt = require("jsonwebtoken");
const jwtGenerator = require("../helpers/jwtGenerator.js")

const createUser =  async(req,res) =>{
    try {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }

        const createdUser = await userService.createNewUser(newUser);

        if(createdUser < 0){
            throw new Error("User creating failed!");
        }

        res.status(201).send({message: {
            id: createdUser.id,
            email: createdUser.email,
            token: jwtGenerator.generateToken(createdUser.id)
        }});
    } catch (error) {
        res.status(400).send({message: error.message});
        throw new Error("User creating failed!");
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

        res.status(201).send({message: {
            id: loginUser.id,
            email: loginUser.email,
            token: jwtGenerator.generateToken(loginUser.id)
        }});   
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}

module.exports = {
    createUser,
    loginUser
}