import { createStore } from 'redux';



const initialState = {store: [
    {id:1, title: '2', isDone: false},
    {id:2, title: '2', isDone: true}
]}

function stateReducer(state= initialState, action) {
    switch (action.type) {
        case ('add'):
            return {...state, store: [...state.store, {id: Date.now(), title: action.title, isDone: false}]}
        case ('delete'):
            return {...state, store: state.store.filter(todo => todo.id !== action.id)}
        case ('toggle'):
            return {...state, store: state.store.map(todo => todo.id !== action.id ? todo : {...todo, isDone: !todo.isDone})}
        default:
            return state
    }
}

const store = createStore(stateReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({type:'add', title: 'Умереть'})
store.dispatch({type:'delete', id: 2})
store.dispatch({type:'toggle', id: 1})