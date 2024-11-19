const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Todo = require('../models/todo')

const verifyToken = require('../middleware/auth')

router.get('/', verifyToken, async function(req, res){
    try{
        const user =await User.findOne({email: req.user.email})
        if(!user){
            return res.status(404).json('User not found')
        }
        const todos =await Todo.find({user: user.id})
        return res.status(200).json(todos)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})

router.post('/',verifyToken, async function(req, res){
    try{
        const user = await User.findOne({email: req.user.email})    
        if(!user){
            return res.status(404).json('User not found')
        }
        const todo = await Todo.create(req.body)
        return res.status(201).json(todo)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})

router.put('/:id',verifyToken, async function(req, res){

    try{
        const user = await User.findOne({email: req.user.email})    
        if(!user){
            return res.status(404).json('User not found')
        }
        const todo = await Todo.findById(req.params.id).populate("user")
        todo.title = req.body.title || todo.title;
        todo.description = req.body.description || todo.description
        await todo.save();

        return res.status(200).json(todo)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})

router.delete('/:id',verifyToken, async function(req, res){
    try{
        const todo = await Todo.findById(req.params.id)
        await todo.deleteOne()
        return res.status(200).json('Todo deleted')
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})

module.exports = router