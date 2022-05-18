import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ link, title, image }) => (
        <Item key={link}>
          <a href={link} target="_blank" rel="noreferrer">
            <Thumbnail src={image} />
            <Title
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            {/* <Title>{title.replace("<b>", "").replace("</b>", "")}</Title> */}
          </a>
        </Item>
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
