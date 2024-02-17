const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
.then((res)=>{
    console.log(`Server Is Connected To Database Sucesfully`)
    app.listen(process.env.PORT,()=>{
        console.log(`Server Started In http://localhost:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Error Faced While connecting to Database`)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(userRoutes)
