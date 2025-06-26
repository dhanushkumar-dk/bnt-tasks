// export const Product = (props) => {
//   return <div>{props.name}</div>;
// };

import Counter from "./Counter";

// Destructure  & named Export and named export can be multiple in one single file
// export const Product = ({ name }) => {
//   return <div>{name}</div>;
// };

// for Counter
export const Product = ({ name, quantity }) => {
  return (
    <div>
      {name}
      <Counter 
       initialCount={quantity}
      /> 
    </div>
  );
};

