const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        name: user.name,
        email: user.email   
    }
    const token = jwt.sign(payload, process.env.JWT_secret);
    return token
}

const verifyToken = (token) => {
    try{
        const payload = jwt.verify(token, process.env.JWT_secret);
        return payload.email
    }
    catch(err){
        return err;
    }
}

module.exports = {
    generateToken,
    verifyToken
}