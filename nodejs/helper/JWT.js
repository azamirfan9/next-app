const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken'); 
dotenv.config(); 
module.exports = {
    generate: function(userid){
        let jwtSecretKey = process.env.JWT_SECRET_KEY; 
        let userdata = { 
            time: Date(), 
            userId: userid, 
        } 
      
        const token = jwt.sign(userdata, jwtSecretKey); 
        return token;
    },
    verify: function(req, res, next){
        var token = req.headers.authorization.split(' ')[1];
        if(token === 'null') return res.json({status: 0, message: 'Unauthorised user'})

        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
            req.user = decoded
            next()
       }catch(e){
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({status: false, response: 'Token expired. Please log in again.' });
            }else if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({ status: false, response: 'Invalid token. Please log in again.' });
            }
            return res.status(500).json({ status: false, response: 'Failed to authenticate token.' });
       }
    },
    newAccountToken: function(userid){
        let jwtSecretKey = process.env.JWT_SECRET_KEY; 
        let userdata = { 
            time: Date(), 
            userId: userid, 
            expiresIn: '60m'
        } 
      
        const token = jwt.sign(userdata, jwtSecretKey); 
        return token;
    }
}