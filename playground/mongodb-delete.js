const MongoClient = require('mongodb').MongoClient;
const database_Name = 'Sih-Fsociety'
MongoClient.connect(`mongodb://localhost:27017/${database_Name}`,(e,client)=>{
    if(e){
        return console.log("Error occured !",e)
    }
    console.log("Success in connecting.")
    const db = client.db(`${database_Name}`)

    //Delete many
    db.collection('Users').deleteMany({name:"qwer"}).then(res=>{
        console.log(res)
    },e => console.log("Error !! : ",e))

    //Delete one
    //
    //find_One_and_Delete
    client.close();
})
