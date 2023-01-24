import {ACTION_ADD, ACTION_DELETE, ACTION_TOGGLE, ACTION_SET} from "../actions/methods.js";

const initialState = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos')):
    {todos: []}

export default function rootReducer(state= initialState, action) {
    switch (action.type) {
        case (ACTION_ADD):
            return {...state, todos: [...state.todos, {id: Date.now(), title: action.title, isDone: false}]}
        case (ACTION_DELETE):
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case (ACTION_TOGGLE):
            return {...state, todos: state.todos.map(todo => todo.id !== action.id ? todo : {...todo, isDone: !todo.isDone})}
        case (ACTION_SET):
            return {...state, todos: action.todoList}
        default:
            return state
    }
}

