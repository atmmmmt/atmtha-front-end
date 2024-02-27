import { Fragment } from "react";
import { Links } from "../../utils/arrays";
import { MenuLinks } from "./MenuLinks";
import { useNavigate } from "react-router-dom";
import { deleteIdCookie } from "../../utils/cockies";
import "../../App.css";
export const Menu = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="menu w-[278px] h-screen relative bg-white px-[15px]">
        <div className="absolute top-[-5px] right-0 w-[85px] h-[74px]">
          <img
            className="max-w-full max-h-full"
            src="/assests/menuIcon/brain.svg"
            alt=""
          />
        </div>
        <div className="w-[145px] m-auto">
          <img
            className="max-w-full max-h-full"
            src="/assests/mainLogo.png"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-start gap-[10px] pl-[55px]">
          {Links.map((link) => {
            return (
              <MenuLinks
                key={link.id}
                srcImg={link.srcImg}
                text={link.text}
                path={link.path}
                pathAdd={link.pathAdd}
              />
            );
          })}
        </ul>
        <button className="w-[209px] flex items-center p-[15px] gap-[10px] mt-[20px]  transition duration-200 rounded-md hover:bg-[#e9e9e966]">
          <div className="w-[24px] h-[24px] ">
            <img src="/assests/menuIcon/logOut.svg" alt="" />
          </div>
          <span
            className="text-[18px] font-[500] text-main "
            onClick={() => {
              deleteIdCookie();
              navigate("/login", { replace: true });
            }}
          >
            تسجيل خروج
          </span>
        </button>
      </div>
    </Fragment>
  );
};
