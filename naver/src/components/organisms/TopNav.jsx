import styled from "styled-components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const linkList = [
  { link: "/", name: "메인" },
  { link: "/movie", name: "영화" },
  { link: "/book", name: "책" },
];

const TopNav = () => {
  //   const { pathname } = useLocation();
  //   const [isShow, setIsShow] = useState(false);

  //   useEffect(() => {
  //     const isMain = pathname === "/";
  //     setIsShow(!isMain);
  //   }, [pathname]);

  //   if (!isShow) return <></>;
  return (
    <>
      <Container>
        <LinkList>
          {linkList.map(({ link, name }) => (
            <Link to={link} key={link}>
              <BtnLink>{name}</BtnLink>
            </Link>
          ))}
        </LinkList>
      </Container>
      <Outlet />
    </>
  );
};
const Container = styled.div`
  border-bottom: 1px solid #ddd;
  height: 60px;
`;
const LinkList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const BtnLink = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;

const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      background: #000;
      color: #fff;
    }
  }
`;

export default TopNav;
