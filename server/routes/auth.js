const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

router.post('/signup',async function(req, res){
    const {name, email, password} = req.body

    try{
        const user =await User.findOne({email})

        if(user){
            return res.status(400).json('User already exists')
        }

        await User.create({ name, email, password})
        const token = jwt.sign({name, email}, process.env.JWT_secret);
        return res.status(201).json(token)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})

router.post('/signin', async function(req, res){
    const {email, password} = req.body;
    
    try{
        const user =await User.findOne({email})
        if(!user || !await user.comparePassword(password)){
            return res.status(400).json('Invalid Credentials')
        }

        const token = jwt.sign({name: user.name, email: user.email}, process.env.JWT_secret);   
        return res.status(200).json(token)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})

module.exports = router