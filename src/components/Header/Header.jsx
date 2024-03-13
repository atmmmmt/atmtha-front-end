import React, { Fragment } from "react";
import { getIdCookie } from "../../utils/cockies";
export const Header = () => {
  return (
    <Fragment>
      <div className="header flex items-center justify-between bg-white w-full py-[10px] px-[55px]">
        <div className="input w-[359px] flex items-center pr-[10px] border-[1px] border-solid border-silver rounded-[10px]">
          <label className="w-[24px] h-[24px] cursor-text" for="search">
            <img src="/assests/headerIcon/search.svg" alt="" />
          </label>
          <input
            id="search"
            className="w-full h-full bg-transparent p-[10px] rounded-[10px] text-[14px] placeholder:text-[14px] focus: outline-none"
            type="text"
            placeholder="اكتب هنا للبحث"
          />
        </div>
        <div className="info-admin flex items-center gap-[20px]">
          <div className="image-admin w-[48px] h-[48px]">
            <img
              className="max-w-full h-full object-cover rounded-full"
              src={getIdCookie()?.profilePhoto.url}
              alt=""
            />
          </div>
          <div className="flex flex-col font-[500]">
            <span className="text-[14px] text-black">
              {getIdCookie()?.username}
            </span>
            <span className="text-[12px] text-main">{getIdCookie()?.role}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
