const jwt = require('jsonwebtoken');


const privateKey="7u318yngyubdyas9neyeya8yy0que0";


// this method we can use to create token
const createNewToken = async (req, res) => {
    const tokenPayload=req;
    try {
        const token=jwt.sign(tokenPayload,privateKey,{expiresIn:"300s"});
        return token;
    } catch (error) {
        return error;
    }
};

// this method we can use to verify token
const verifyToken = async (req, res) => {
    const token=req.body;
    try {
        const decodeToken=jwt.verify(token,privateKey);
        return decodeToken;
    } catch (error) {
        return error;
    }
};

module.exports={
    createNewToken,
    verifyToken
}