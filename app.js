// Import Packages
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config() // to be able to use the environmental variables declared in another file.

// importing routes:
const taskrouter = require('./routes/taskroutes')
// initializing our app:
const app = express()
// Defining Constants and variables:
const port = process.env.PORT || 5000
// Import Files:


// Setting middlewares:
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Setting mongoose Connection:
mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log(err.message)
    })



// setting routes:
app.use('/', taskrouter)
// setting Server listening Port:
app.listen(port, () => {
    console.log(`The Server is running on port ${port}`)
})