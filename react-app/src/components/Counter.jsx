import { useState } from "react";

// const useState = (init) => {
//   let state = init;
//   const setState = (val) => {
//     state = val;
//   };
//   return [state, setState];
// };

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
    </>
  );
};

export default Counter;
