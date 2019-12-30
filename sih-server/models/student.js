let mongoose = require('mongoose')

import {College_complaint} from './uollege_complaint'
import {University_complaint} from './university_complaint'

let Student = mongoose.model('Student',new mongoose.Schema({
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
    },
    college_id:{
        type:String,
        required:true,
        minLength:2,
    },
    //These are not ids
    college_complaints:{
        type:[College_complaint]
    }
    //These are only ids
    university_complaint_ids:{
        type:[String]
    },

    
}))
module.exports = {Student}
