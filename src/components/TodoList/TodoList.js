import React from "react";
import "./TodoList.css"

class TodoList extends React.Component {

    state = {
        taskList: [
            {id: 1, title: 'Make homework', isDone: true},
            {id: 2, title: 'Add new tasks', isDone: false},
            {id: 3, title: 'Turn off the computer', isDone: false},
        ]
    }

    //finding index of the specific task array
    findDictIdx (elemId) {
        let dictIdx;
        this.state.taskList.filter((el, idx) => el.id.toString() === elemId.toString() ? dictIdx = idx: false);
        return dictIdx;
    }

    //When we click on task div
    toggleTask = (event) => {
        let dictIdx = this.findDictIdx(event.target.id) //find index of specific dict

        //change condition of value of isDone
        if (dictIdx) {
            const list = this.state.taskList // take state
            if (list[dictIdx].isDone) {
                list[dictIdx].isDone = false;
            } else {
                list[dictIdx].isDone = true;
            }
            this.setState({taskList: list}) //refresh state
        }

        // Changing color
        if (event.target.tagName === 'DIV') {
            if (event.target.className === 'task done') {
                event.target.className = 'task undone'

            } else {
                event.target.className = 'task done'
            }
        }
    }

    //Delete task
    onDeleteTask = (event) => {
        const dictIdx = this.findDictIdx(event.target.parentElement.id) //finding specific index
        const list = this.state.taskList;
        list.splice(dictIdx,1); //delete index from our task list
        this.setState({taskList: list}) //set state
    }

    //Adding task
    onAddTask = (event) => {
        event.preventDefault() //stopping sending form
        let inputValue = event.target[0].value //taking value from input
        if (inputValue !== '') { //checking if there is nothing in input
            this.setState({taskList: [...this.state.taskList, {id: Date.now(), title: inputValue, isDone: false}]}) //adding task
        }
        event.target[0].value = ''; //deleting value in input
    }


    render() {
        return (
            <>
                <div className="task-list">
                    {this.state.taskList.map(item => //map a list of tasks
                        <div key={item.id} id={item.id} className={item.isDone===true ? "task done": "task undone"} onClick={this.toggleTask}> {/*//onClick and task logic*/}
                            {item.title} {/*item text*/}
                            <button className="delete-button" onClick={this.onDeleteTask}>Delete</button> {/*Delete button*/}
                        </div>
                    )}
                </div>
                <div className="task-input-box">
                    <form onSubmit={this.onAddTask}> {/*Form that adds task*/}
                        <input type="text" className="add-text-input"/>
                        <input type="submit" value="Add" className="add-button"/>
                    </form>
                </div>
            </>

        )
    }
}

export default TodoList