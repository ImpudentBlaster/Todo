import React from "react";
import Task from "./Task";

function TodoList({ item, handleDelete , handleShow }) {
  return (
    <div className="ul">
      {item.length == 0 ? (
        <p>No task available</p>
      ) : (
<ul >{
         item.map(list => (
            <Task list={list} handleDelete={handleDelete} handleShow={handleShow}/>
         ))
        
        }</ul>
        // <Task setShow={setShow} item={item} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default TodoList;
