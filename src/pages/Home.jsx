import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";
import { Header } from "../components/Header/Header";
import { getIdCookie } from "../utils/cockies";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userId = getIdCookie();
  const checkCookie = () => {
    if (!userId) {
      navigate("/login", { replace: true });
    }
  };
  checkCookie();
  useEffect(() => {
    if (!userId) {
      navigate("/login", { replace: true });
    }
  }, [navigate, userId]);

  return (
    <div className="home flex w-full">
      <Menu />
      <div className="w-full">
        <Header />
        <div className="componentsHome bg-[#f8f8f8] overflow-auto calc100 w-[100%] py-[60px] px-[40px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
