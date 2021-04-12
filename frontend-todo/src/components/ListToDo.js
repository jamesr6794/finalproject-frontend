import React from "react"
import Todo from "./Todo"
import { List } from "@material-ui/core"

function ListToDo({ todos, toggleFinish, deleteTodo }) {
    return (
        <List>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleFinish={toggleFinish}
                    deleteTodo={deleteTodo} />
            ))}
        </List>
    )
}

export default ListToDo