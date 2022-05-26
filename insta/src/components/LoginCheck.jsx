import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../stores";

const LoginCheck = () => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(loginState);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return <Outlet />;
};

export default LoginCheck;
