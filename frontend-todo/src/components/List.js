import React from "react"
import Todo from "./Todo"

function List({ todos, toggleFinish }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleFinish={toggleFinish} />
            ))}
        </ul>
    )
}

export default List