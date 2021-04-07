import React from "react"

function Todo({ todo, toggleFinish }) {
    function CheckboxClick() {
        toggleFinish(todo.id)
    }




    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={CheckboxClick}/>
            <li 
                style={{
                    color: "black",
                    textDecoration: todo.finished ? "line-through" : null
                }}>
                    {todo.task}
            </li>
            <button>X</button>
        </div>        
    )
}

export default Todo