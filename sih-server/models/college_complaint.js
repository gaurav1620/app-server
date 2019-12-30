let mongoose = require('mongoose')

let College_complaint = mongoose.model('College_complaint',new mongoose.Schema({
    text:{
        type:String,
        required:true,
        minLength:2,
        trim:true
    },
    //eg fees,lectures,timetable
    type:{
        type:String,
        required:true,
        trim:true
    },
    department:{
        type:String,
        required:false
    },
    student_id:{
        type:String,
        default:null
    },
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    }
}))
module.exports = {College_complaint}
