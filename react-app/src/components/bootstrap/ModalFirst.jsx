import styled from "styled-components";
const ModalFirst = ({ onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>asdf</Container>
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
`;

export default ModalFirst;
