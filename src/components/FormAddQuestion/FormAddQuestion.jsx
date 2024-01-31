import { Fragment } from "react";
import { Input } from "../Input/Input";
import { Questions1 } from "../../utils/arrays";
import { QuestionInput } from "../QuestionInput/QuestionInput";
export const FormAddQuestion = () => {
  return (
    <Fragment>
      <div className="ques-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form className="flex flex-col gap-[35px]">
            <QuestionInput />
            {Questions1.map((ques) => {
              return (
                <Input
                  key={ques.id}
                  for={ques.label}
                  label={ques.label}
                  type={ques.type}
                  id={ques.label}
                />
              );
            })}
            <button className="text-[white] group w-full py-[14px] relative z-10 shadow-shadow rounded-[15px]">
              <span className="bg-main group-hover:scale-[1.01] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-2]"></span>
              حفظ
            </button>
          </form>
        </div>
        <div className="w-[280px] h-[252px] sticky top-[10px]">
          <img
            className="w-full h-full"
            src="/assests/imageInput/person.svg"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};
