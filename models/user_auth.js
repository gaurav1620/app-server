let mongoose = require('mongoose')

let User_auth = mongoose.model('User_auth',new mongoose.Schema({
    
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User_info'
    },

    password:{
        type:String,
        required:true,
    }
}))
module.exports = {User_auth}
