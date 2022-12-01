import React from "react";
import './App.css';
import TodoList from "./components/TodoList";

class App extends React.Component {


  render(){
      return (
        <>
            <h1>Todo List</h1>
            <TodoList/> {/*Todo List component*/}
        </>
     )
  }
}

export default App;
