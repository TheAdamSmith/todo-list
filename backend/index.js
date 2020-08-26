const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const ToDoListItem = require('./models/todolistitem')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.disable('etag');

app.use(express.static('build'))





//retrieve and send entire list
app.get('/api/todolist/', (request, response, next) =>{
        
    ToDoListItem.find({})
        .then(items =>{
           response.json(items.map(item => item.toJSON())) 
        })
        .catch(error => next(error))     
        
})

//add a new item to the list
app.post('/api/todolist/', (request, response, next) => {
  const body = request.body; 

  const toDoListItem = new ToDoListItem ( {
    content: body.content,
    completed: body.completed || false,
    edit: body.edit || false 
  })

  toDoListItem.save()
    .then(savedItem => savedItem.toJSON())
    .then(savedAndFormattedItem =>{
      response.json(savedAndFormattedItem)
    })
    .catch(error =>next(error))

})

//update an item on the list
app.put('/api/todolist/:id', (request, response, next) => {

  const body = request.body; 

  const toDoListItem =  {
    content: body.content,
    completed: body.completed || false,
    edit: body.edit || false 
  }

  ToDoListItem.findByIdAndUpdate(request.params.id, toDoListItem, {new: true})
    .then(updatedItem => {
      response.json(updatedItem.toJSON())
    })
    .catch(error => next(error))

})

//delete an item on the list
app.delete('/api/todolist/:id', (request, response, next) => {

  ToDoListItem.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))

})

//unknown endpoint handler
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

//global error handler
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)