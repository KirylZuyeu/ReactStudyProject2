import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 1, completed: false, title: 'Buy oil'},
    {id: 1, completed: false, title: 'Buy milk'},
  ]

  return (
    <div className='wrapper'>
      <h1>Hello world</h1>
      <TodoList/>
    </div>
  );
}

export default App;
