const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{
    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).json('Unauthorized')
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_secret);
        req.user = payload;
        next();
    }
    catch(err){
        return res.status(500).json('Error')
    }
}

module.exports = verifyToken