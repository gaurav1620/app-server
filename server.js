// Ⓒ  Team Fsociety 2020"

require('dotenv').config()

let express = require('express')
let bodyParser = require('body-parser')
let app = express();

let {mongoose} = require('./db/mongoose')
let {User_auth} = require('./models/user_auth.js')
let {User_info} = require('./models/user_info.js')
let {Complaint} = require('./models/complaint.js')

//const port = 3000
const port = process.env.PORT || 3000

//bodyParser is the middleware that express will use
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));

//DEBUG
app.get('/',(req,res)=>res.send("HOme"))
app.post('/users',(req,res)=>res.send("Test"))
//Debug

//Add a new User
//body : 
//  name     : String
//  password : String
//  hostel   : String
//  post     : String
//  user_type: String
//
//response:
//  success : bool
//  message : String
app.post('/user',(req,res)=>{
    let i = 0;
    let uid = new mongoose.Types.ObjectId();
    
    
    let user_auth = new User_auth({
        _id : new mongoose.Types.ObjectId(),
        user_id: uid,
        password : req.body.password,
    })

    user_auth.save().then(user_auth_obj =>{
        let user_info = new User_info({
            _id : uid,
            name : req.body.name,
            auth: new mongoose.Types.ObjectId(user_auth._id),
            hostel : req.body.hostel,
            post : req.body.post,
            user_type : req.body.user_type, 
        })
        
        user_info.save().then((user)=>{
            
            res.status(200).json({success: true, id: uid})

        },(err)=>{
            res.status(400).json({
                    success: false,
                    message: 'Failed to save user_info !'  
                })
                console.log("ERROR : Failed a POST at /udduser at user_info.save !")
        }, next=>{
            console.log(next);
            console.log("Check ", i)
        })
        //console.log("THis is just a warning !")
    },(err) =>{
        res.status(400).send({success:false,message:'Failed to validate'});
        console.log("ERROR : Failed to validate a POST /addUser  request at user auth.save !")
        console.log(err)
    
    }).catch(e => {
        console.log("Check")
        console.log(e)
    })
})
/*
    user_auth.save(err,resp=>{
        if(err){
            res.status(400).send({success:false,message:'Failed to validate'});
            console.log("ERROR : Failed to validate a POST /addUser  request at user auth.save !")
        }
        let user_info = new User_info({
            _id : uid,
            name : req.body.name,
            auth: user_auth._id,
            hostel : req.body.hostel,
            post : req.body.post,
            user_type : req.body.user_type, 
        })

        user_info.save(err,resp)=>{
            if(err){
                res.status(400).send({
                    success: false,
                    message: 'Failed to save user_info !'
                })
                console.log("ERROR : Failed a POST at /udduser at user_info.save !")
            }else{
                res.status(200).send({success: true, id: uid})
            }
        }
    })
})*/

//Login
//body:
//  uid      : String
//  password : String
//
//response :
//  success : bool
//  message : String
app.get('/auth',(req,res)=>{

    //User id is passed as uid
    
    let req_uid = new mongoose.Types.ObjectId(req.body.uid)
    
    User_auth.findOne({user_id:req_uid}).then((user_auth)=>{
        if(user_auth.password === req.body.password){
            res.status(200).send({success:true})
        }else{
            //console.log("res pass       : " + req.body.password)
            //console.log("user_auth      : " + user_auth.toString())
            //console.log("auth pass      : " + user_auth.password)
            res.status(400).send({success:false,message:"wrong password"})
        }
    }, e =>{
        res.status(400).send({success:false,message:"User not found !"})
    })
})


//
app.post('/complaint',(req,res)=>{
    let i = 0;
    let uid = mongoose.Types.ObjectId(req.body.uid)
    let cid = mongoose.Types.ObjectId();
    let newComplaint = new Complaint({
        _id : cid,
        user_id : uid,

        is_resolved : req.body.isResolved,
        description : req.body.description,
    });
    newComplaint.save().then(obj =>{
        
        User_info.findOneAndUpdate({
            _id:uid
        },{
            $push:{
                complaints: cid, 
            }
        },done =>{
            console.log(++i)
        })

        res.status(200).send({success:true})
    },err=>{
       res.status(400).send({success: false,message:"Failed to Create a new Complaint"})
        console.log("Failed to create new complaint!");
        console.log(e);
    })
})

app.get('/complaints',(req,res)=>{
    
    Complaint.find().then(c => {
        res.send(c)
    }, e => {
        console.log("An error occured at finding all complaints")
        res.status(400).send()
    })

    /*
    let complaints = [];
    
    
    Complaint.find().then( doc => {

        console.log("Check")
        
        let newDoc = {
            isResolved : doc.is_resolved,
            description : doc.description,
            upvotes : doc.upvotes,
            downvotes : doc.downvotes,
        }
        console.log("Doc : \n" + doc.toString())
        console.log("newDoc : \n" + newDoc.toString())

        complaints.push(newDoc);
    },err =>{
        console.log("Error in fetching complaint : ")
        console.log(e);

        res.status(400).send({success : false})
    })

    let obj = {
        success : true,
        complaints : complaints,
    }

    res.status(200).send(obj)
    */
})

app.get('/user',(req,res)=>{
    let uid = mongoose.Types.ObjectId(req.body.uid)
    
    if(!uid) res.status(400).send();

    User_info.find({_id : uid}).then(user =>{
        res.send(user)
    },e=>{
        console.log("Error at finding user !")
        console.log(e)

        res.status(400).send({success:false})
    })
})

//Default response
app.get('/*',(req,res)=>{
    res.send("<h1 align="center">Ⓒ  Team Fsociety 2020 &#128526 </h1>")
})

//Port listening 
app.listen(port, ()=>{
    console.log("Ⓒ  Team Fsociety 2020.")
    console.log(`Connected on port : ${port}`)
})

module.exports = {app}
