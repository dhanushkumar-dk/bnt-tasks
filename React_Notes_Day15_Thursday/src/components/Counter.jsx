// const Counter = () => {
//   let count = 2;
//   const increase = () => {
//     count++;
//     console.log(count);
//   };
//   const decrease = () => {
//     count--;
//     console.log(count);
//   };
//   return (
//     <div>
//       <button onClick={decrease}>-</button>
//       <span>{count}</span>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// };

// export default Counter;

import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increase = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const decrease = () => {
    setCount(count - 1);
    // console.log(count);
  };
  return (
    <div className="counter">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
