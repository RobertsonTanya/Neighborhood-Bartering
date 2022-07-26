const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res)=>{
        const user = new User(req.body)

        user.save()
            .then((newUser)=>{
                console.log(newUser);
                console.log('Successfully registered');
                res.json({
                    successMessage: 'Thank you for registering',
                    user: newUser
                })
            })
            .catch((err)=>{
                console.log('Register not successful.')
                res.status(400).json(err);
            })
    },
    login: (req, res)=>{
        User.findOne({email: req.body.email})
            .then((userRecord)=>{
                if(userRecord === null){
                    res.status(400).json({message: 'Invalid login attempt'})
                } else {
                    //compare passed in password to stored one === boolean
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid)=>{
                            if(isPasswordValid){
                                console.log('Password is Valid')
                                res.cookie(
                                    'usertoken', 
                                    jwt.sign(
                                        {
                                            //payload is the data we want to save/use
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username
                                        },
                                        //we need a key to sign and hash the cookie's datas
                                        process.env.JWT_SECRET
                                    ),
                                    //configuration settings for this cookie(options for security)
                                    //these cookies will be 'HttpOnly' so they will be invisible to client-side JS
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 9000000)
                                    }
                                    //jsonify the cookie:
                                ).json({
                                    message: 'Successfully logged in',
                                    userLoggedIn: userRecord.username,
                                    userId: userRecord._id
                                })
                            } else {
                                res.status(400).json({message: 'Invalid attempt.'})
                            }
                        })
                        .catch((err)=>{
                            console.log(err);
                            res.status(400).json({message: 'Invalid attempt.'})
                        })
                }
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json({message: 'Invalid attempt.'})
            })
        },
        logout: (req, res)=>{
            console.log('logging out');
            res.clearCookie('usertoken');
            res.status(200).json({ 
                message: 'You have successfully logged out.'
            })
        },
        getLoggedInUser: (req, res)=>{
            /* const decodedJWT = jwt.decode(req.cookies.usertoken, {
                complete: true
            })*/

            User.findOne({_id: req.jwtpayload.id})
                .then((user)=>{
                    console.log(user);
                    res.json(user);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
}