// actions
export const ACTION_ADD = 'add'
export const ACTION_DELETE = 'delete'
export const ACTION_TOGGLE = 'toggle'
export const ACTION_SET = 'set'

export const addFunc = (title) => ({type:ACTION_ADD, title})
export const deleteFunc = (id) => ({type:ACTION_DELETE, id})
export const toggleFunc = (id) => ({type:ACTION_TOGGLE, id})
export const setFunc = (todoList) => ({type:ACTION_TOGGLE, todoList})
