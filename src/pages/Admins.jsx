import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableAdmins from "../components/Accounts/TableAdmins";
import AddAdmin from "../components/Accounts/AddAdmin";
import Pop from "../components/Pop";

export default function Admins() {
  const navigate = useNavigate();
  const [openAdd, setopenAdd] = useState(false);

  return (
    <div className="admins h-full">
      <AddAdmin open={openAdd} setOpen={setopenAdd} />
      <Pop open={openAdd} setOpen={setopenAdd} />
      <div className="flex justify-between mb-[43px] items-center">
        <div className="flex gap-[21px]">
          <button
            onClick={() => navigate("/managerAccounts")}
            className={`group cursor-pointer font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${"bg-[white] text-[#8f8f8f]"}`}
          >
            مستحدمين
          </button>
          <button
            onClick={() => navigate("/admins")}
            className={`group cursor-pointer font-medium w-[132px] transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${"bg-main text-[white]"}`}
          >
            الادمن
          </button>
        </div>
        <span
          className="text-main text-[18px] underline cursor-pointer"
          onClick={() => setopenAdd(true)}
        >
          إضافة أدمن جديدة
        </span>
      </div>
      <TableAdmins />
    </div>
  );
}
