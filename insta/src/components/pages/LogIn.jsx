import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

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
import { getToken } from "../../apis/user";
import instance from "../../apis";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, message, token } = await getToken({
      user_name: userName,
      password,
    });

    if (success) {
      alert("로그인 성공");
      instance.defaults.headers.common["Authorization"] = token;
      localStorage.token = token;
    } else {
      alert(message);
    }
  };

  return (
    <Layout>
      <Main>
        <Box>
          <LogoWrapper>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Form onSubmit={handleSubmit}>
            <InputText
              onChange={(e) => setUserName(e.target.value)}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              required
            />
            <InputText
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              type="password"
              required
            />
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
