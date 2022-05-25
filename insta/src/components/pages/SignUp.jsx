import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../apis/user";

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
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user_name, password, passwordConfirm } = form;
    if (user_name.length < 4) {
      return alert("아이디를 4글자 이상 입력하세요");
    }
    if (password !== passwordConfirm) {
      return alert("비밀번호를 확인하세요");
    }

    const { success, message } = await createUser(form);

    if (success) {
      alert("환영합니다");
      navigate("/login");
    } else {
      alert(message);
      setForm((prev) => ({ ...prev, user_name: "" }));
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
            <InputText name="name" placeholder="성명" onChange={handleChange} />
            <InputText
              value={form.user_name}
              name="user_name"
              placeholder="사용자 이름"
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={handleChange}
            />
            <InputText
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={handleChange}
            />
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
