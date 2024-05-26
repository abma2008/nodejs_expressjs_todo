// importing mongoose:
const mongoose = require('mongoose')
// creating task schemal using mongoose.Schema:
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    }
})
// exporting the model we get from declaring the taskSchema:
module.exports = mongoose.model('Task', taskSchema)