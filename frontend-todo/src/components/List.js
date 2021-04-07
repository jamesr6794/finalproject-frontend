import React from "react"
import Todo from "./Todo"

function List({ todos, toggleFinish, deleteTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleFinish={toggleFinish}
                deleteTodo={deleteTodo} />
            ))}
        </ul>
    )
}

export default List