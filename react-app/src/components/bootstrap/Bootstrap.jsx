import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Carousel from "./Carousel";
import ModalFirst from "./ModalFirst";

// type종류
// fadeIn : fade in 효과
// slide : 슬라이드효과
const Bootstrap = () => {
  const [isShow, setShow] = useState(false);
  const [isShowModalFirst, setIsShowModalFirst] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>asdf</button>
      <Accordion data={accordionData} />
      {isShow && <Dropdown />}
      <Carousel data={carouselData} type="fadeIn" />
      <Carousel data={carouselData} type="slide" />
      <button onClick={() => setIsShowModalFirst(true)}>modal first</button>
      {isShowModalFirst && (
        <ModalFirst onClose={() => setIsShowModalFirst(false)} />
      )}
    </>
  );
};

export default Bootstrap;
