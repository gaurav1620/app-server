let mongoose = require('mongoose')
    
let Complaint = mongoose.model('Complaint',new mongoose.Schema({
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
module.exports = {Complaint}
