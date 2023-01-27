import {createSlice} from "@reduxjs/toolkit";

// const initialState = {
//     count: 0,
//     todos: localStorage.getItem('todos') ?
//         JSON.parse(localStorage.getItem('todos')):
//         []
// }

// export const ACTION_ADD = createAction('add')
// export const ACTION_DELETE = createAction('delete')
// export const ACTION_TOGGLE = createAction('toggle')
const toolkitSlice = createSlice({
     name: "toolkit",
    initialState: {
        todos: localStorage.getItem('todos') ?
            JSON.parse(localStorage.getItem('todos')).todos.todos:
            []
    },
    reducers: {
        addFunc(state, action) {
            state.todos.push({id: Date.now(), title: action.payload, isDone: false})
        },
        deleteFunc(state, action) {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        },
        toggleFunc(state, action) {
            return {
                ...state,
                todos: state.todos.map(todo => todo.id !== action.payload ? todo : {...todo, isDone: !todo.isDone})
            }
        }
    }
})

export default toolkitSlice.reducer
export const {addFunc, deleteFunc, toggleFunc} = toolkitSlice.actions