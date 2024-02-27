import { Fragment, useState } from "react";
import { LessonsCard } from "./../components/LessonsCard/LessonsCard";
import DrowbSubjects from "../components/QuestionCard/DrowbSubjects";
import PaginationCom from "../components/Pagination";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Lessons = () => {
  const [state, setStaet] = useState(true);

  return (
    <Fragment>
      <div className="lessons bg-bg w-[100%] ">
        <div className="flex gap-[21px]">
          <button
            onClick={() => setStaet(true)}
            className={`group font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${
              state ? "bg-main text-[white]" : "bg-[white] text-[#8f8f8f]"
            }`}
          >
            علمي
          </button>
          <button
            onClick={() => setStaet(false)}
            className={`group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px] ${
              !state ? "bg-main text-[white]" : "bg-[white] text-[#8f8f8f]"
            }`}
          >
            أدبي
          </button>
        </div>
        <div className="flex justify-between mt-[25px] items-center">
          <div className="flex items-center gap-[8px]">
            <DrowbSubjects
              value="المادة"
              text={[
                "رياضيات",
                "رياضيات",
                "رياضيات",
                "رياضيات",
                "رياضيات",
                "رياضيات",
              ]}
            />
            <DrowbSubjects
              value="الوحدة"
              text={[
                "الوحدة الاولى",
                "الوحدة الاولى",
                "الوحدة الاولى",
                "الوحدة الاولى",
                "الوحدة الاولى",
                "الوحدة الاولى",
              ]}
            />
            <DrowbSubjects
              value={"الدرس"}
              text={[
                "الدرس الأول",
                "الدرس الأول",
                "الدرس الأول",
                "الدرس الأول",
                "الدرس الأول",
                "الدرس الأول",
              ]}
            />
          </div>
          <NavLink to="/addLesson">
            <span className="text-main text-[18px] underline cursor-pointer">
              إضافة درس جديدة
            </span>
          </NavLink>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
            <LessonsCard />
            <LessonsCard />
          </div>
          <PaginationCom />
        </div>
      </div>
    </Fragment>
  );
};
