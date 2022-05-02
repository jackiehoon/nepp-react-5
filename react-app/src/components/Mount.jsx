import { useState } from "react";
import Info from "./Info";

const Mount = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible && <Info />}
    </>
  );
};

export default Mount;
