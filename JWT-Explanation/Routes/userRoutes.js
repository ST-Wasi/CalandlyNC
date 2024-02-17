const express = require('express');
const router = express.Router();
const User = require('../Models/User')
const jwt = require('jsonwebtoken')


router.post('/user',async (req,res)=>{
    const {name,email,password} = req.body;
    console.log({name,email,password});
    const token =  jwt.sign(email,process.env.SECRET_KEY)
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    console.log("decoded",decoded)
    res.send(`ok ${token}`)
})


module.exports = router