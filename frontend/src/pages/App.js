import React from 'react';

import ToDoList from '../containers/todolist'

/*App entry point
calls the todolist component*/
function App() {

  return (
    <div>
      <h2>To-do List</h2>
      <p>by: Adam Smith, 
      <a href="https://github.com/TheAdamSmith/todo-list">
        Code Repository
      </a>
      </p>
      <ToDoList/>
    </div>
  );
}

export default App;
