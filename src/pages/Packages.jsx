import React from "react";
import { NavLink } from "react-router-dom";
import { TablePackages } from "../components/PackagesSection/TablePackages";

export default function Packages() {
  return (
    <div className="codes">
      <div className="flex justify-between mb-[20px] items-center">
        <div className="flex gap-[21px]"></div>
        <NavLink to="/addPackage">
          <span className="text-main text-[18px] underline cursor-pointer">
            إضافة باقة جديدة
          </span>
        </NavLink>
      </div>
      <TablePackages />
    </div>
  );
}
