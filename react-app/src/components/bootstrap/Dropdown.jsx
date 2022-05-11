import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const wrapperEl = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (!wrapperEl.current.contains(e.target)) setIsShow(false);
      // if (e.target !== buttonEl.current) setIsShow(false);
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setIsShow((prev) => !prev)}>
        Dropdown<span>Button</span>
      </Button>

      <Menu isShow={isShow}>
        <Item>#1</Item>
        <Item>#2</Item>
        <Item>#3</Item>
        <Item>#4</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  color: #fff;
  background-color: #198754;
  border: none;
  padding: 10px 12px;
  border-radius: 4px;
  cursor: pointer;
  :after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`;
const Menu = styled.ul`
  background: #fff;
  z-index: 1;
  display: ${({ isShow }) => !isShow && "none"};
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ddd;
  width: 150px;
  border-radius: 4px;
`;
const Item = styled.li`
  padding: 10px 12px;
  :hover {
    background: #efefef;
  }
  & + & {
    border-top: 1px solid #ddd;
  }
`;

export default Dropdown;
