// import React, { useState } from "react";

// function Task({ item, handleDelete,setShow }) {
// //  const [show , setShow] = useState(item)
//  const[re , setRe] = useState({})
// //  console.log(show)
//   function handleShow(list) {
//     // setShow(!show)
//     // list.completed = show;
//     // console.log(list)
// //    conssole.log(show)

// setRe({...list , completed:true})
// console.log(list)

//   }
//   return (
//     <>
//       <ul>
//         {item.map((list) => {
//           return (
//             <li>{console.log(list.completed)}
//                 <span onClick={() => handleShow(list)}>{list.completed ? "✔️" : "⬜"}</span>
//               <span className={list.completed  ? "design" : ""}>

//                 {`|Task: ${list.todoTask} || Description: ${list.todoDescription} `}
//               </span>
//                 <span onClick={() => handleDelete(list.id)}>{list.completed ? "" : "❌"}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Task;

import React from "react";
import { useState } from "react";
function Task({ list, handleDelete }) {
    const [show ,setShow] = useState(false);
    function handleShow(){
        setShow(!show)
    }
  return (
    <>
      <li>
      <span onClick={() => handleShow(list)}>{show ? "✔️" : "⬜"}</span>
        <span className={show? "design" : ""}>
          {`Task: ${list.todoTask} || Description: ${list.todoDescription} `}
        </span>
        <span onClick={() => handleDelete(list.id)}>
          {show ? "" : "❌"}
        </span>
      </li>
    </>
  );
}

export default Task;
