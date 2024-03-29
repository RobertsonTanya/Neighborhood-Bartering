const jwt = require('jsonwebtoken');
require("dotenv").config();

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
                    req.jwtpayload = payload
                    next();
                }
            })
    }
}