import styled from "styled-components";

const Dropdown = () => {
  return (
    <Wrapper>
      <Button>Dropdown Button</Button>
      <Menu>
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
`;
const Button = styled.button``;
const Menu = styled.ul`
  position: absolute;
`;
const Item = styled.li``;

export default Dropdown;
