import styled from "styled-components";
const Movie = () => {
  return (
    <Layout>
      <h1>영화</h1>
      <Form>
        <input />
        <button>검색</button>
      </Form>
      <List>
        <Item>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTlfMTI2%2FMDAxNjI0MDM1MzQ5Mzc3.-2aRLEOopctbCNb3q1MZQX9WIW3wzNMsSAqSvjS7joUg.8Jz1d05QQTZvy6hNooue7gMb8oOoNLn_5ZHtt5ZPwtsg.JPEG.kj909293%2F1624035307168%25A3%25AD2.jpg&type=sc960_832" />
          <Title>기생충</Title>
        </Item>
        <Item>
          <Thumbnail src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTlfMTI2%2FMDAxNjI0MDM1MzQ5Mzc3.-2aRLEOopctbCNb3q1MZQX9WIW3wzNMsSAqSvjS7joUg.8Jz1d05QQTZvy6hNooue7gMb8oOoNLn_5ZHtt5ZPwtsg.JPEG.kj909293%2F1624035307168%25A3%25AD2.jpg&type=sc960_832" />
          <Title>기생충</Title>
        </Item>
      </List>
    </Layout>
  );
};

const Layout = styled.div``;
const Form = styled.form``;
const List = styled.ul``;
const Item = styled.li``;
const Thumbnail = styled.img``;
const Title = styled.p``;

export default Movie;
