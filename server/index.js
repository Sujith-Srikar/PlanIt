const express = require('express')
const app = express()
const mongoose = require('mongoose')

// To use env variables
require("dotenv").config();
const port = process.env.PORT || 3000;

// Import routes
const authroute = require('./routes/auth')
const todoroute = require('./routes/todo')

// To accept request as json
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use('/auth',authroute)
app.use('/todo', todoroute)

app.listen(port,()=>{
    console.log("listening on 3000")
})