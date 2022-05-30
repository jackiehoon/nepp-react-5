import { useRef, useState } from "react";
import styled from "styled-components";

import { Backdrop, ModalContainer } from "../atoms";

import { createPost } from "../../apis/post";

const ModalAddPost = () => {
  const [imgPreview, setImgPrivew] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const fileEl = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPrivew(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    createPost({ file, content });
  };

  return (
    <>
      <Backdrop />
      <Container>
        <Header>새 게시물 만들기</Header>
        <Main>
          {imgPreview ? (
            <ImgPreview src={imgPreview} />
          ) : (
            <>
              <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
              <BtnUpload onClick={() => fileEl.current.click()}>
                컴퓨터에서 선택
              </BtnUpload>
              <InputFile
                onChange={handleFileChange}
                ref={fileEl}
                type="file"
                accept="image/*"
              />
            </>
          )}
          <Textarea rows="3" onChange={(e) => setContent(e.target.value)} />
          <BtnUpload onClick={handleSubmit}>업로드</BtnUpload>
        </Main>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)`
  background-color: #fff;
  width: 583px;
  border-radius: 10px;
`;

const Header = styled.header`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const Main = styled.div`
  height: 583px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;
const Guide = styled.p`
  font-size: 24px;
`;
const BtnUpload = styled.button`
  background: #0095f6;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;

const ImgPreview = styled.img``;
const Textarea = styled.textarea``;

export default ModalAddPost;
