import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";
import { Header } from "../components/Header/Header";

const Home = () => {
  return (
    <div className="home flex w-full">
      <Menu />
      <div className="w-full">
        <Header />
        <div className="componentsHome bg-[#f8f8f8] overflow-auto calc100 w-[100%] py-[65px] px-[40px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
