import { useState } from "react";
import styled from "styled-components";

import useBodyOverflowHidden from "../../hooks/useBodyOverflowHidden";

const ModalNickname = ({ onClose, onSubmit }) => {
  useBodyOverflowHidden();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSubmit(text);
    onClose();
  };
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <h2>닉네임 바꾸기</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>확인</button>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`;
const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 400px;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 4px;
`;
export default ModalNickname;
