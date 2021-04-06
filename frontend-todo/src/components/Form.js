import React, { useState } from "react"

function Form() {
    const [todo, makeTodo] = useState({
        id: "",
        task: "",
        finished: false
    })

    function handleTaskInputChange(e) {
        makeTodo({ ...todo, task: e.target.value })
    }


    return (
        <form>
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