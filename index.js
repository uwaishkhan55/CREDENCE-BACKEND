const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {connnectDB}=require('./models/index')
require('dotenv').config()

connnectDB();
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/",require('./routes/index'));

app.listen(process.env.PORT || 5000,()=>{
    console.log("server starting......")
});