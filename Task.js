import React from "react";
import { useState } from "react";
function Task({ list, handleDelete, handleShow }) {
  return (
    <>
      <li className={list.status ? "li" : "li-original"}>
        {console.log(list)}
        <div>
          <span className="t-emoji" onClick={() => handleShow(list)}>
            {list.status ? "🟢" : "⚪"}
          </span>
          <span>
            {`Task: ${list.todoTask}  |  Description: ${list.todoDescription} `}
          </span>
          <span className="d-emoji" onClick={() => handleDelete(list.id)}>
            🗑
          </span>
        </div>
      </li>
    </>
  );
}

export default Task;

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
