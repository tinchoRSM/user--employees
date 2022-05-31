const jwt = require("jsonwebtoken");
const User = require("../models/user.js")

const protect = async (req, res, next) =>{
    let token;

    console.log(req.headers);

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {

        try {
          // Get token from header
          
          token = req.headers.authorization.split(' ')[1]
          console.log(token);
          // Verify token
          const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
          // Get user from the token
          const userFound = await User.findByPk(decoded.id);

          req.user = userFound;
          
          next()

        } catch (error) {
          res.status(401).send({message: "Not authorized!"});
        }
      }
    
      if (!token) {
        res.status(401).send({message: "Not authorized, no token!"})
      }

    
}

module.exports = {
    protect
}