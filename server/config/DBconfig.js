const mongoose = require('mongoose')

const mongoUri= process.env.MONGODB_URI

mongoose.connect(mongoUri,{
    useNewUrlParser : true,
    useUnifiedTopology :true,
}).then(()=> console.log("Connected to Mongodb"))
.catch(err=>console.err("Mongodb Connection error: ", err))


module.exports= mongoose