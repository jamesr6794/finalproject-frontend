import React, { useEffect, useState } from 'react'
import Form from "./components/Form"
import ListToDo from "./components/ListToDo"
import './App.css';
import Typography from "@material-ui/core/Typography"

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

  function deleteTodo(id) {
    makeTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
        <Typography style={{padding:18}} variant="h1">My To-Do List</Typography>
        <Form createTodo={createTodo} />
        <ListToDo 
          todos={todos} 
          toggleFinish={toggleFinish}
          deleteTodo={deleteTodo} />
    </div>
  )
}

export default App;