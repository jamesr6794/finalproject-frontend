import React from "react"

function Todo({ todo, toggleFinish, deleteTodo }) {
    function CheckboxClick() {
        toggleFinish(todo.id)
    }

    function deleteClick() {
        deleteTodo(todo.id)
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
            <button onClick={deleteClick}>X</button>
        </div>        
    )
}

export default Todo