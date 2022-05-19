const getUserById =  (req,res) =>{
    message = (`Getting user by id ${req.params.userId}`);
    
    res.send({message: message});
}

module.exports = {
    getUserById
}