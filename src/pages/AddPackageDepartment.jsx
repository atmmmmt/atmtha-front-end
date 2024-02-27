import React, { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { NavLink } from "react-router-dom";
import { FormAddPackgeDepartment } from "../components/FormAddPackgeDepartment/FormAddPackgeDepartment";
export const AddPackageDepartment = () => {
  return (
    <Fragment>
      <HeadInputs title="إضافة باقة جديدة" />
      <div className="flex gap-[21px] mt-[20px]">
        <NavLink
          to="/addPackageDepartment"
          className={`bg-[white] text-[#8f8f8f] group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px]`}
          end
        >
          قسم
        </NavLink>
        <NavLink
          to="/addPackage"
          className={`bg-[white] text-[#8f8f8f] group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px]`}
          end
        >
          مادة
        </NavLink>
      </div>
      <FormAddPackgeDepartment />
    </Fragment>
  );
};
