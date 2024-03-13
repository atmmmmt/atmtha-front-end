import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormAddCodeDepartment } from "../components/FormAddCodeDepartment/FormAddCodeDepartment";

export const AddCodeDepartment = () => {
  return (
    <Fragment>
      <HeadInputs title="توليد كود جديد" />
      <div className="flex gap-[21px] mt-[20px]">
        <NavLink
          to="/addCodeDepartment"
          className={`bg-[white] text-[#8f8f8f] group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px]`}
          end
        >
          قسم
        </NavLink>
        <NavLink
          to="/addCode"
          className={`bg-[white] text-[#8f8f8f] group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px]`}
          end
        >
          مادة
        </NavLink>
      </div>
      <FormAddCodeDepartment />
    </Fragment>
  );
};
