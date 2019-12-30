const MongoClient = require('mongodb').MongoClient;
const database_Name = 'Sih-Fsociety'
MongoClient.connect(`mongodb://localhost:27017/${database_Name}`,(e,client)=>{
    if(e){
        return console.log("Error occured !",e)
    }
    console.log("Success in connecting.")
    const db = client.db(`${database_Name}`)

    db.collection("Users").insertOne({
        name:"Mahes",
        email: "abcf@gmail.com",
        password : "lmao@123",
    },(e,result)=>{
        if(e)return console.log("Error occured ! at inserting");
        return console.log(JSON.stringify(result.ops,undefined,2))
    })

    client.close();
})
