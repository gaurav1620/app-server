let mongoose = require('mongoose')
const dbName = 'Sih-Fsociety'

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost:27017/${dbName}`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

module.exports = {mongoose}

