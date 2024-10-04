const express = require('express')
require('dotenv').config();
const app= express()
const mongoDbConnection= require('./config/DBconfig')

const PORT=process.env.PORT || 5000;

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
