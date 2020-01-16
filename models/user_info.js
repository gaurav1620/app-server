let mongoose = require('mongoose')

let  {User_auth} = require('./user_auth.js')
let  {Complaint} = require('./complaint.js')
let User_info = mongoose.model('User_info',new mongoose.Schema({
    
    /*
    _id is the primary key
    */
        
    name:{
        type:String,
        required:true,
        minLength:2,
        trim:true,
    },
    auth:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User_auth',
    },
    hostel:{
        type:String,
        default:' Hostel details are not filled !' ,
    },
    post:{
        type:String,
        default:'No post specified till now !',
    },
    user_type:{
        type:String,
        default:'No user type specified till now !',
    },
    complaints:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Complaint'
    }
}))
module.exports = {User_info}
