import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Carousel from "./Carousel";

const Bootstrap = () => {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>asdf</button>
      <Accordion data={accordionData} />
      {isShow && <Dropdown />}
      <Carousel data={carouselData} />
    </>
  );
};

export default Bootstrap;
