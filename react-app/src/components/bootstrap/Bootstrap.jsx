import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Carousel from "./Carousel";
import ModalFirst from "./ModalFirst";
import ModalNickname from "./ModalNickname";

// type종류
// fadeIn : fade in 효과
// slide : 슬라이드효과
const Bootstrap = () => {
  const [isShow, setShow] = useState(false);
  const [isShowModalFirst, setIsShowModalFirst] = useState(false);
  const [isShowModalNickname, setIsShowModalNickname] = useState(false);

  const [name, setName] = useState("홍길동");
  const [nickname, setNickname] = useState("별명");

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>asdf</button>
      <Accordion data={accordionData} />
      {isShow && <Dropdown />}
      <Carousel data={carouselData} type="fadeIn" />
      <Carousel data={carouselData} type="slide" />

      <h2>이름: {name}</h2>
      <button onClick={() => setIsShowModalFirst(true)}>이름바꾸기</button>
      {isShowModalFirst && (
        <ModalFirst
          onClose={() => setIsShowModalFirst(false)}
          onSubmit={(val) => setName(val)}
        />
      )}

      <h2>닉네임: {nickname}</h2>
      <button onClick={() => setIsShowModalNickname(true)}>별명바꾸기</button>
      {isShowModalNickname && (
        <ModalNickname
          onClose={() => setIsShowModalNickname(false)}
          onSubmit={(val) => setNickname(val)}
        />
      )}
    </>
  );
};

export default Bootstrap;
