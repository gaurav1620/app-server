const MongoClient = require('mongodb').MongoClient;
const database_Name = 'Sih-Fsociety'
MongoClient.connect(`mongodb://localhost:27017/${database_Name}`,(e,client)=>{
    if(e){
        return console.log("Error occured !",e)
    }
    console.log("Success in connecting.")
    const db = client.db(`${database_Name}`)
    
    db.collection('Users').find({name:'Gaurav'}).toArray().then(doc=>{
        console.log("Users are : ")
        console.log(JSON.stringify(doc, undefined, 2))
    },e => {
        console.log("Error occured : ",e);
    })

    //client.close();
})
