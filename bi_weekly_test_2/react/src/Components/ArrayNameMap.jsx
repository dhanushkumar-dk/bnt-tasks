// function ListDisplay({ items }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// function ArrayNameMap() {
//   const values = ["Apple", "Banana", "Cherry", "Orange"];

//   return (
//     <div>
//       <h1>Fruits List</h1>
//       <ListDisplay items={values} />
//     </div>
//   );
// }

// export default ArrayNameMap;

import React from "react";

function ArrayNameMap() {
  const users = [
    { id: 1, name: "Dhanush", age: 21 },
    { id: 2, name: "Kumar", age: 22 },
    { id: 3, name: "Arun", age: 23 },
  ];

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayNameMap;
