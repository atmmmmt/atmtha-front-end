import React, { useState } from "react";
import TableAccounts from "../components/Accounts/TableAccounts";
import { useNavigate } from "react-router-dom";
import AddAcount from "../components/Accounts/AddAcount";
import Pop from "../components/Pop";

export default function Accounts() {
  const navication = useNavigate();
  const [openAdd, setopenAdd] = useState(false);
  return (
    <div className="accouts">
      <AddAcount open={openAdd} setOpen={setopenAdd} />
      <Pop open={openAdd} setOpen={setopenAdd} />
      <div className="flex justify-between mb-[43px] items-center">
        <div className="flex gap-[21px]">
          <button
            // onClick={}
            className={`group font-medium w-[132px] transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${"bg-main text-[white]"}`}
          >
            مستحدمين
          </button>
          <button
            onClick={() => navication("/admins")}
            className={`group font-medium w-[132px] transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${"bg-[white] text-[#8f8f8f]"}`}
          >
            الادمن
          </button>
        </div>
        <span
          onClick={() => setopenAdd(true)}
          className="text-main text-[18px] underline cursor-pointer"
        >
          إضافة مستخدم جديدة
        </span>
      </div>
      <TableAccounts />
    </div>
  );
}
