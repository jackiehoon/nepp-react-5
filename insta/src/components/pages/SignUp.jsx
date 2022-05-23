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

const SignUp = () => {
  return (
    <Layout>
      <Main>
        <Box>
          <LogoWrapper>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Form>
            <InputText placeholder="휴대폰 번호 또는 이메일 주소" />
            <InputText placeholder="성명" />
            <InputText placeholder="사용자 이름" />
            <InputText placeholder="비밀번호" type="password" />
            <BtnLogin>가입</BtnLogin>
          </Form>
        </Box>
        <Box>
          <SecondBox>
            계정이 있으신가요? <Link to="/login">로그인</Link>
          </SecondBox>
        </Box>
      </Main>
    </Layout>
  );
};

export default SignUp;
