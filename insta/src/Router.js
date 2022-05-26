import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import LogOut from "./components/pages/LogOut";
import LoginCheck from "./components/LoginCheck";
import Header from "./components/organisms/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
