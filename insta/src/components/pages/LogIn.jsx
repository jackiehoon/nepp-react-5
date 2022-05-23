import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  Layout,
  Main,
  Box,
  LogoWrapper,
  Logo,
  Form,
  InputText,
  BtnLogin,
  SecondBox,
} from "../atoms/login";

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

export default LogIn;
