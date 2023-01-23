import {useState} from "react";

export default function useTodos() {
    const [taskList, setTaskList]= useState([
        {id: 1, title: 'Make homework', isDone: true},
        {id: 2, title: 'Add new tasks', isDone: false},
        {id: 3, title: 'Turn off the computer', isDone: false},
    ])

    const addTodo = (todo) => {
        todo = {...todo, id: Date.now(), isDone: false}
        setTaskList([...taskList, todo])
    }

    const deleteTodo = (id) => {
        const newTodos = taskList.filter(todo => todo.id!== id)
        setTaskList(newTodos)
    }

    const toggleTodo = (id) => {
        const newTodos = taskList.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        setTaskList(newTodos)
    }
    return {
        taskList, addTodo, deleteTodo, toggleTodo
    }
}