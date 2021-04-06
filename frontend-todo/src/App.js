import React, { useState } from 'react'
import Form from "./components/Form"
import Form from "./components/List"

import './App.css';


function App() {
  const [todos, makeTodos] = useState([])

  function createTodo(todo) {
    makeTodos([todo, ...todos])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>My To-Do List</p>
        <Form createTodo={createTodo} />
        <List todos={todos} />
      </header>
    </div>
  )
}

export default App;