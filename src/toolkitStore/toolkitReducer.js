import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: localStorage.getItem('todos') ?
        JSON.parse(localStorage.getItem('todos')):
        []
}

const ACTION_ADD = createAction('add')
const ACTION_DELETE = createAction('delete')
const ACTION_TOGGLE = createAction('toggle')
const ACTION_SET = createAction('set')

export default createReducer(initialState, {
    [ACTION_ADD]: function (state) {
        state.count++
    },
    [decrement]: function (state) {
        state.count++
    }
})