import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormAddUnits } from "../components/FormAddUnits/FormAddUnits";

export const AddUnits = () => {
  return (
    <Fragment>
      <HeadInputs title="إضافة الوحدة جديدة" />
      <div className="flex gap-[21px] mt-[20px]">
        <NavLink
          to="/addUnits"
          className={`bg-[white] text-[#8f8f8f] group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px]`}
          end
        >
          وحدة
        </NavLink>
        <NavLink
          to="/addLesson"
          className={`bg-[white] text-[#8f8f8f] group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px]`}
          end
        >
          درس
        </NavLink>
      </div>
      <FormAddUnits />
    </Fragment>
  );
};
