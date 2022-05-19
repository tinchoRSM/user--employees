const User = require("../models/user");

const createDefaultUser = async () =>{

    try {
        const newUser = await User.create({
            email: "tinchoRSM@gmail.com",
            password: "123456"
        });
    
        return newUser.toJSON();
    } catch (error) {
        throw new Error("Could not created default user" + error.message);
    }
   
}

const getAllUsers = async () => {
    const users = await User.findAll();

    return JSON.stringify(users, null, 2);
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
        throw new Error("Cound not find user with that credentials"+ error.message);
    }
    
}

module.exports = {
    createDefaultUser,
    getAllUsers,
    loginComfirm
}
