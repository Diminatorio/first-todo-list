import {useState} from "react";
import "./AddForm.css"

function AddForm({addTodo}) {
    const [todo, setTodo] = useState({title:''})

    const onChangeHadler = (ev) => {
        const {value, name} = ev.target
        setTodo({...todo, [name]:value})
    }

    const onAddTodo = (ev) => {
        ev.preventDefault()
        if (todo.title !== '') {
            addTodo(todo)
            setTodo({title:''})
        }

    }

    return (
        <form className="task-input-box" onSubmit={onAddTodo}>
            <input type="text"
                   placeholder="Write your task here"
                   className="add-text-input"
                   value={todo.title}
                   name='title'
                   onChange={onChangeHadler}/>
            <button className="add-button">Add</button>
        </form>
    )
}

export default AddForm