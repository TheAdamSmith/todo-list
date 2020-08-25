const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('useFindAndModify', false)
  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB');
    })
    .catch(error =>{
        console.log('error connecting to MongoDb:', error.message);
        
    })

const todoListItemSchema = new mongoose.Schema({
  content: {
      type: String,
      required: true
  },
  completed: Boolean,
  edit: Boolean
})

//remove immutable fields and replace id
todoListItemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('TodoListItem', todoListItemSchema)