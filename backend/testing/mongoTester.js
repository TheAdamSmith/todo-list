const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('useFindAndModify', false)

let toDoList = [
  {
    content: 'take out trash',
    completed: false,
  },
  {
    content:'finish this project',
    completed: false,
  },
  {
    content: 'buy groceries',
    completed: true,
  }
]

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const todoListItemSchema = new mongoose.Schema({
  content: {
      type: String,
      required: true
  },
  completed: Boolean
})

const ToDoListItem = mongoose.model('ToDoListItem', todoListItemSchema)

/*
toDoList.map(item => {
  console.log(item);
  const newItem = new ToDoListItem({
    content: item.content,
    completed: item.completed
  })
  newItem.save().then(response => {
    console.log('item saved');
  })
})
*/

ToDoListItem.find({}).then(result =>{
  result.forEach(item =>{
    console.log(item);
  })
  mongoose.connection.close()
})
