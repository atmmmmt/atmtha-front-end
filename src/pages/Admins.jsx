import React from "react";
import { useNavigate } from "react-router-dom";
import TableAdmins from "../components/TableAdmins";
export default function Admins() {
  const navication = useNavigate();
  return (
    <div className="admins">
      <div className="flex justify-between mb-[43px] items-center">
        <div className="flex gap-[21px]">
          <button
            onClick={() => navication("/managerAccounts")}
            className={`group font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${"bg-[white] text-[#8f8f8f]"}`}
          >
            مستحدمين
          </button>
          <button
            onClick={() => navication("/admins")}
            className={`group font-medium w-[132px] transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${"bg-main text-[white]"}`}
          >
            الادمن
          </button>
        </div>
        <span className="text-main text-[18px] underline cursor-pointer">
          إضافة أدمن جديدة
        </span>
      </div>
      <TableAdmins />
    </div>
  );
}
