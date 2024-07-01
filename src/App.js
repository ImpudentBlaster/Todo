import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "./App.css"
const App = () => {
  const [task, setTask] = useState("");
  const [description, setDesrciption] = useState("");
  const [item, setItem] = useState([]);
const [demo , setDemo] = useState("");
  useEffect(() => {
    console.log("list updated");
  }, [item]);
  function handleClick() {
    if (task.trim() !== "" && description.trim() !== "") {
      setItem([
        ...item,
        { id: item.length, todoTask: task, todoDescription: description , status:false },
      ]);
      setTask("");
      setDesrciption(""); 
    }
    else{
      alert("Input Required")
    }
   
  }
   function handleDelete(id) {
    console.log(id)
setItem(item.filter(list => list.id !== id).map((item , index) =>{
  return {...item , id:index};
}));


    }
  function handleShow(list){
console.log(list)
console.log(list.status)
list.status = !list.status;
console.log(list)
setDemo(Math.random())

  }
  return (
    <div className="container">
      <div>
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
      </div>
     <TodoList item ={item} handleDelete={handleDelete} handleShow ={handleShow}/>
    </div>
  );
};

export default App;
