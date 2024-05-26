const express = require('express')
// defining the router:
const router = express.Router()

// import the Task Model we will be using to perform our CRUD operations:
const Task = require('../models/task')
// defining the routes for tasks and todo:
// definig get /tasks:
router.get('/tasks', async (request, response) => {
    try {
        const tasks = await Task.find()
        if (tasks.length === 0) {
            return response.status(400).json({ msg: 'Currently, the collection tasks is empty...' })
        }
        else {
            return response.status(200).json({ msg: 'List of all Tasks:', tasks })
        }
    } catch (err) {
        return response.status(500).json({ msg: err.message })
    }
})
// defining post:
router.post('/tasks', async (request, response) => {
    try {
        const { title, description } = request.body
        const newTask = new Task({ title: title, description: description })
        await newTask.save()
        return response.status(201).json({ msg: ' The Task has been added successfully' })

    } catch (err) {
        return response.status(500).json({ msg: err.message })
    }
})
// defining put:
router.put('/tasks/:id', async (request, response) => {
    try {
        const { id } = request.params // you can also write: const id = request.params.id
        const updateTask = await Task.findByIdAndUpdate(id, request.body)
        response.status(201).json({ msg: `Updated ID ${id}` })
    }
    catch (err) {
        response.status(500).json({ msg: err.message })
    }
})
// defining delete:
router.delete('/tasks/:id', async (request, response) => {
    try {
        const { id } = request.params
        await Task.findByIdAndDelete(id)
        return response.status(200).json({ msg: `The Document with ID ${id} has been deleted successfully` })
    } catch (err) {
        return response.status(500).json({ msg: err.message })
    }
})

// exporting router to use:
module.exports = router
