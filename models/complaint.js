let mongoose = require('mongoose')

let {User_info} = require ('./user_info.js')
let Complaint = mongoose.model('Complaint',new mongoose.Schema({
    
    /*
    _id is the primary key
    */
    
    student_visibility:{
        type:Boolean,
        default:false,
    },
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User_info',
    },
    is_resolved:{
        type:Boolean,
        default:false,
    },
    created_at:{
        type:Date,
        default:undefined,
    },
    description:{
        type:String,
        default:undefined,
    },
    type:{
        type:String,
        default:undefined,
    },
    upvotes:{
        type:Number,
        default:0,
    },
    downvotes:{
        type:Number,
        default:0,
    }
}))
module.exports = {Complaint}
