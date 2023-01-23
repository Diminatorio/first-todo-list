import React from "react";
import Todo from '../Todo'

function TodoList ({taskList, deleteTodo, toggleTodo}) {

    return(
        <div className="task-list">
            {taskList.map(item => //map a list of tasks
                <Todo key={item.id} todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )}
        </div>
    )
}

export default TodoList