import React, { useState } from 'react'


import './App.css';


function App() {
  const [todos, makeTodos] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <p>My To-Do List</p>
      </header>
    </div>
  )
}

export default App;