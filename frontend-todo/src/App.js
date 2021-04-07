import React, { useEffect, useState } from 'react'
import Form from "./components/Form"
import List from "./components/List"
import './App.css';

const storage = "frontend-todo"

function App() {
  const [todos, makeTodos] = useState([])

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(storage))
    if (storedTodo) {
      makeTodos(storedTodo)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem(storage, JSON.stringify(todos))
  }, [todos])

  function createTodo(todo) {
    makeTodos([todo, ...todos])
  }

  function toggleFinish(id) {
    makeTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            finished: !todo.finished
          }
        } return todo
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>My To-Do List</p>
        <Form createTodo={createTodo} />
        <List todos={todos} toggleFinish={toggleFinish} />
      </header>
    </div>
  )
}

export default App;