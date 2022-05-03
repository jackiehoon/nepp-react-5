import { useState } from "react";
import styles from "../App.module.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button className={styles.button} onClick={() => setNumber(number + 1)}>
        +1
      </button>
    </>
  );
};

export default Counter;
