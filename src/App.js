import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import useReduxTodos from "./hooks/useReduxTodos/useReduxTodos";

function App () {
    const {todos, addTodo, deleteTodo, toggleTodo} = useReduxTodos()

    return (
        <>
            <h1>Todo List</h1>
            <TodoList taskList={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            <AddForm addTodo={addTodo}/>
        </>
    )
}

export default App
