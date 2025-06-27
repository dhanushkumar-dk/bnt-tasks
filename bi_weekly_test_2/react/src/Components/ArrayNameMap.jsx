import React, { useState } from "react";

const New = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

const ArrayNameMap = () => {
  const [names, setNames] = useState(["John", "Jane", "Alex"]);

  return (
    <div>
      <ul>
        {names.map((name) => {
          return names.length ? (
            <New key={Math.floor(Math.random() * 3)} name={name} />
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default ArrayNameMap;
