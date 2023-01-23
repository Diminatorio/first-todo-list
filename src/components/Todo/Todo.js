import React from "react";
import "./Todo.css"

function Todo({todo, deleteTodo, toggleTodo}) {
    const onDeleteTodo = (ev) => {
        ev.stopPropagation()
        deleteTodo(todo.id)
    }

    const onToggleTodo = () => {
        toggleTodo(todo.id)
    }

    return (
        <div className={todo.isDone===true ? "task done": "task undone"} onClick={onToggleTodo}>
            {todo.title} {/*item text*/}
            <button className="delete-button" onClick={onDeleteTodo}>Delete</button> {/*Delete button*/}
        </div>
    )
}

export default Todo