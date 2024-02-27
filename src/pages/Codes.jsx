import React from "react";
import { TableCodes } from "../components/Codes/TableCodes";
import { NavLink } from "react-router-dom";

export default function Codes() {
  return (
    <div className="codes">
      <div className="flex justify-between mb-[20px] items-center">
        <div className="flex gap-[21px]"></div>
        <NavLink to="/addCode">
          <span className="text-main text-[18px] underline cursor-pointer">
            إضافة كود جديدة
          </span>
        </NavLink>
      </div>
      <TableCodes />
    </div>
  );
}
