import { useMemo } from "react";
import styled from "styled-components";

const getPageList = (start, end) => {
  const pageList = [];
  for (let i = start; i <= end; i++) {
    pageList.push(i);
  }
  return pageList;
};

// const MAX_PAGE = 10;
const Pagination = ({ onChange, total, display, nowPage }) => {
  const last = Math.ceil(total / display);
  const start = Math.ceil(nowPage / 10) * 10 - 9;
  const end = start + 9 > last ? last : start + 9;

  const pageList = useMemo(() => getPageList(start, end), [start, end]);

  return (
    <List>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>{"<"}</BtnPage>
      )}
      {pageList.map((page) => (
        <BtnPage
          key={page}
          isActive={page === nowPage}
          onClick={() => onChange(page)}
        >
          {page}
        </BtnPage>
      ))}
      {nowPage < last && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>{">"}</BtnPage>
      )}
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const BtnPage = styled.button`
  margin: 0 5px;
  border-radius: ${({ isActive }) => isActive && "50%"};
`;

export default Pagination;
