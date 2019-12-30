let mongoose = require('mongoose')


let College_redresser = mongoose.model('College_redresser',new mongoose.Schema({
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
    college_id:{
        type:String,
        required:true,
    }

}))
module.exports = {College_redresser}
