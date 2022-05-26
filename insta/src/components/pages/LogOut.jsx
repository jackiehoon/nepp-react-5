import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import instance from "../../apis";
import { loginState } from "../../stores";

const LogOut = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(loginState);
  useEffect(() => {
    delete localStorage.token;
    delete instance.defaults.headers.common["Authorization"];
    setIsLogin(false);
    navigate("/login");
  }, []);
  return null;
};

export default LogOut;
