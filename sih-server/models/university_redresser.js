let mongoose = require('mongoose')


let University_redresser = mongoose.model('University_redresser',new mongoose.Schema({
    name:{
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
        type:Number,
        required:true,
    },
}))
module.exports = {University_redresser}
