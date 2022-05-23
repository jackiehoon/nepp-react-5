import styled from "styled-components";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ link, title, image, isbn }) => (
        <Link to={`/book/${isbn.split(" ")[1]}`} key={link}>
          <Item>
            <Thumbnail src={image} />
            <Title
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </Item>
        </Link>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 10px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default BookList;
