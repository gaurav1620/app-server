let mongoose = require('mongoose')

let User = mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        minLength:2,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        minLength:2,
        trim:true,
    },
    phone:{
        type:String,
        required:false,
        minLength:10,
        maxLength:10,
    },
    pass:{
        type:String,        
    }
}))
module.exports = {User}
