import React from "react"

function List({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default List