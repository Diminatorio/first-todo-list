import {useDispatch, useSelector} from "react-redux";
import {store} from "../../toolkitStore";
import {addFunc, deleteFunc, toggleFunc} from "../../toolkitStore/toolkitSlice";


export default function useToolkitTodos() {
    const dispatch = useDispatch()

    store.subscribe(() => {
        localStorage.setItem('todos', JSON.stringify(store.getState()))
    })
    const todos = useSelector(state => state.todos.todos)
    console.log(todos)
    const addTodo = (title) => {
        dispatch(addFunc(title))
    }
    const deleteTodo = (id) => {
        dispatch(deleteFunc(id))
    }
    const toggleTodo = (id) => {
        dispatch(toggleFunc(id))
    }

    return {
        todos, addTodo, deleteTodo, toggleTodo
    }
}
