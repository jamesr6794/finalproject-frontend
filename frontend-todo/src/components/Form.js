import React, { useState } from "react"
import {v4 as uuidv4} from "uuid"
import { Button, TextField } from "@material-ui/core"

function Form({ createTodo }) {
    const [todo, makeTodo] = useState({
        id: "",
        task: "",
        finished: false
    })

    function handleTaskInputChange(e) {
        makeTodo({ ...todo, task: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim()) {
            createTodo({...todo, id: uuidv4()})
            makeTodo({...todo, task: ""})
        }
    }


    return (
        <form className="form-todo" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange} />
            <Button type="submit">submit</Button>
        </form>
    )
}

export default Form