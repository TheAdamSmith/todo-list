import React from 'react';
import nextId from 'react-id-generator'


import ToDoList from '../containers/todolist'
import './App.css';

function App() {
  const toDoList = [
    {
      content: 'take out trash2',
      completed: false,
      id: nextId()
    },
    {
      content:'finish this project',
      completed: false,
      id: nextId()
    },
    {
      content: 'buy groceries',
      completed: true,
      id: nextId()
    }
  ]

  return (
    <div>
      <ToDoList list={toDoList}/>
    </div>
  );
}

export default App;
