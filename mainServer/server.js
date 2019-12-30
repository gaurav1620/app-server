let express = require('express')
let bodyParser = require('body-parser')
let app = express();

let {mongoose} = require('./db/mongoose')
let {User} = require('./models/user')

const port = process.env.PORT || 3000

//bodyParser is the middleware that express will use
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));
//app.get('/',(req,res)=>res.send("HOme"))

//Adding a user
app.post('/user',(req,res)=>{
    let newUser = new User({
        name  : req.body.name,
        email : req.body.email,
        username : req.body.username,
        phone : req.body.phone,
        pass  : req.body.pass,
    })
    console.log("Checkpoint")
    newUser.save((err,resp)=>{
        if(err){
            console.log("EROOR ! : ",err)
            res.send(err)
        }else{
            console.log("Success",resp)
            res.send(resp)
        }
    })
})

app.get('/user',(req,res)=>{
    User.find({username:req.body.username}).then((usr)=>res.send(usr)
        ,(e)=> {
            console.log(e);
            res.send(e);
        })
})

app.listen(port, ()=>{
    console.log(`Connected on port : ${port}`)
})

