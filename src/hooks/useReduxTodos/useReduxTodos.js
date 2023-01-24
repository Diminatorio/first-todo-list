import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store";
import {addFunc, deleteFunc, toggleFunc} from "../../store/actions/methods";


export default function useReduxTodos() {
    const dispatch = useDispatch()
    store.subscribe(() => {
        localStorage.setItem('todos', JSON.stringify(store.getState()))
    })

    const {todos} = useSelector(state => ({
        todos: state.todos
    }))
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
