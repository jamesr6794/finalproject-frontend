import React, { useState } from "react"
import {v4 as uuidv4} from "uuid"

function Form() {
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
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange} />
            <button type="submit" />
        </form>
    )
}

export default Form