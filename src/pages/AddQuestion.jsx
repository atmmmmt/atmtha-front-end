import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormAddQuestion } from "../components/FormAddQuestion/FormAddQuestion";
export const AddQuestion = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <HeadInputs title="إضافة سؤال" />
        <div>
          <label
            className="flex items-center text-main text-[18px] font-[700] underline gap-[5px] cursor-pointer"
            htmlFor="excel"
          >
            <img src="/assests/questionImage/excel.svg" alt="" />
            رفع ملف أسئلة
          </label>
          <input className="hidden" id="excel" type="file" />
        </div>
      </div>
      <FormAddQuestion />
    </Fragment>
  );
};
