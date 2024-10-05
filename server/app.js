const express = require('express')
require('dotenv').config();
const app= express()
const mongoDbCon= require('./config/DBconfig')
const appRoutes = require('./routes/Routes')
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT=process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors())
app.use('/api/v1', appRoutes)
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
