const jwt = require('jsonwebtoken');


const privateKey="7u318yngyubdyas9neyeya8yy0que0";


// this method we can use to create token
const createNewToken = async (req, res) => {
    const tokenPayload=req;
    try {
        const token=jwt.sign(tokenPayload,privateKey,{expiresIn:"60s"});
        return token;
    } catch (error) {
        return error;
    }
};

// this method we can use to verify token
const verifyToken = async(req, res, next) => {
    const token = req?.headers?.authorization?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(403).send('No token provided!');
    }
  
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        return res.status(401).send('User Session got Expired / Invalid Token, Please login again..!');
      }
      req.email = decoded.email;
      next();
    });
  };

module.exports={
    createNewToken,
    verifyToken
}