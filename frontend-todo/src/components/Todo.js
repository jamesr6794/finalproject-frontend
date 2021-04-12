import React from "react"
import { IconButton, ListItem, Checkbox, Typography } from "@material-ui/core"
import { CloseIcon } from "@material-ui/icons/Close"

function Todo({ todo, toggleFinish, deleteTodo }) {
    function CheckboxClick() {
        toggleFinish(todo.id)
    }

    function deleteClick() {
        deleteTodo(todo.id)
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox 
                checked={todo.finished}
                onClick={CheckboxClick} />
            <Typography 
                variant= "body1"
                style={{
                    textDecoration: todo.finished ? "line-through" : null
                }}>
                    {todo.task}
            </Typography>
            <IconButton onClick={deleteClick}>
                {/* <CloseIcon /> */}
            </IconButton>
        </ListItem>        
    )
}

export default Todo