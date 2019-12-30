let mongoose = require('mongoose')

import {College_complaint} from './college_complaint'
import {College_redresser} from './college_redresser'


let College = mongoose.model('College',new mongoose.Schema({
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

    //These complaints are to be fetched from the 
    //college complaints database
    complaints:{
        type:[College_complaint],
    },
    redressers:{
        type:[College_redresser],
    }
}))
module.exports = {College}
