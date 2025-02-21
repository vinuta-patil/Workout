const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email,password) {
   //checks is the fields have values
    if(!email|| !password)
    {
        throw Error('All fields must be filled')
    }
    //checks if email is valid
    if(!validator.isEmail(email))
    {
        throw Error('email is not valid')
    }

    //checks if password is strong enough
    if(!validator.isStrongPassword(password))
        {
            throw Error('password not strong')
        }
    const exists = await this.findOne({email})
    if(exists)
    {
        throw Error('email already in use')
    }
    const salt= await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email,password:hash})
    return user
}
userSchema.statics.login = async function(email,password) {
    //checks is the fields have values
    if(!email|| !password)
        {
            throw Error('All fields must be filled')
        } 
    const user = await this.findOne({email})
     if(!user)
     {
         throw Error('Incorrect email')
     }
     const match = await bcrypt.compare(password,user.password)
     if(!match)
     {
        throw Error('Incorrect password')
     }
     return user
 }

module.exports= mongoose.model('User',userSchema)