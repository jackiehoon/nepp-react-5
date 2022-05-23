import styled from "styled-components";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <Layout>
      <Main>
        <Box>
          <LogoWrapper>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Form>
            <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
            <InputText placeholder="비밀번호" type="password" />
            <BtnLogin>로그인</BtnLogin>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </Box>
        <Box>
          <SecondBox>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </SecondBox>
        </Box>
      </Main>
    </Layout>
  );
};

const Layout = styled.div`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  width: 350px;
`;
const Box = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 10px 40px;
  margin-bottom: 10px;
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin: 36px 0;
`;
const Logo = styled.img`
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputText = styled.input`
  height: 36px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding-left: 8px;
  & + & {
    margin-top: 6px;
  }
`;
const BtnLogin = styled.button`
  background: #0095f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 9px;
  font-weight: bold;
  margin-top: 16px;
  cursor: pointer;
`;

const FBLogin = styled.div`
  color: #385185;
  font-weight: bold;
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
  margin: 20px 0;
  text-align: center;
`;

const SecondBox = styled.div`
  padding: 15px 0;
  font-size: 14px;
  text-align: center;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #0095f6;
  }
`;

export default LogIn;
