const jwt = require('jsonwebtoken');
const env = require('dotenv');

module.exports = {
    authenticate(req, res, next){
        jwt.verify(
            req.cookies.usertoken, 
            process.env.JWT_SECRET,
            (err, payload) => {
                if(err){
                    console.log(err);
                    res.status(401).json({verified: false});
                } else {
                    console.log(res.json);
                    req.jwtpayload = payload;
                    next();
                }
            })
    }
}