let mongoose = require('mongoose')

import {University_level_complaints} from './university_level_complaints'

let University = mongoose.model('University',new mongoose.Schema({
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
    college_ids:{
        type:[String],
    },    
    complaints:{
        type:[University_level_complaints],
    }
}))
module.exports = {University}
