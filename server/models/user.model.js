const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongooose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be minimum of 8 characters']
    }
}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get(()=>this._confirmPassword)
    .set((value)=>this.confirmPassword = value)

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords must match.');
        console.log("Passwords don't match.");
    }
    next();
})
UserSchema.pre("save", function(next){
    console.log('in pre save');
    bcrypt.hash//////stopped here    35 min 17 sec
});