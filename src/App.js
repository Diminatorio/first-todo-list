import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos/useTodos.js"
import AddForm from "./components/AddForm";

function App () {
    const {taskList, addTodo, deleteTodo, toggleTodo} = useTodos()
    return (
        <>
            <h1>Todo List</h1>
            <TodoList taskList={taskList} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            <AddForm addTodo={addTodo}/>
        </>
    )
}

export default App
