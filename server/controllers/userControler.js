const getUserById =  (req,res) =>{
    message = `Getting user by id ${req.params.userId}`;
    
    res.send({message: message});
}

const loginUser = (req,res) =>{
    message = `Attemting to login a user.`;

    
    res.send({message: message});
}

module.exports = {
    getUserById,
    loginUser
}