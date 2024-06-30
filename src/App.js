import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task";
import TodoList from "./TodoList";
import "./App.css"
const App = () => {
  const [task, setTask] = useState("");
  const [description, setDesrciption] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("list updated");
  }, [item]);
  function handleClick() {
    if (task.trim() !== "" && description.trim() !== "") {
      setItem([
        ...item,
        { id: item.length, todoTask: task, todoDescription: description },
      ]);
      setTask("");
      setDesrciption(""); 
    }
    else{
      alert("Input Required")
    }
   
  }
   function handleDelete(id) {
       setItem(item.filter(list => list.id !== id))
    }
  
  return (
    <>
      <h1>Todo list</h1>
      <input
        placeholder="Enter task name"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      ></input>
      <input
        placeholder="Enter task description"
        value={description}
        onChange={(event) => setDesrciption(event.target.value)}
      ></input>
      <button onClick={handleClick}>Enter</button>
     <TodoList item ={item} handleDelete={handleDelete} />
    </>
  );
};

export default App;
