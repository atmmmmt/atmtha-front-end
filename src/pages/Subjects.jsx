import React, { useState } from "react";
import SubjectCard from "../components/SubjectCard/SubjectCard";
import { NavLink } from "react-router-dom";
import PaginationCom from "../components/Pagination";

const Subjects = () => {
    const [state, setStaet] = useState(true);
    return (
        <div className="subjects bg-bg  w-[100%]  ">
            <div className="flex justify-between mb-[43px] items-center">
                <div className="flex gap-[21px]">
                    <button
                        onClick={() => setStaet(true)}
                        className={`group font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${
                            state
                                ? "bg-main text-[white]"
                                : "bg-[white] text-[#8f8f8f]"
                        }`}
                    >
                        علمي
                    </button>
                    <button
                        onClick={() => setStaet(false)}
                        className={`group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px] ${
                            !state
                                ? "bg-main text-[white]"
                                : "bg-[white] text-[#8f8f8f]"
                        }`}
                    >
                        أدبي
                    </button>
                </div>
                <NavLink to="addSubject">
                    <span className="text-main text-[18px] underline cursor-pointer">
                        إضافة مادة جديدة
                    </span>
                </NavLink>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
                    <SubjectCard />
                    <SubjectCard />
                </div>
                <PaginationCom />
            </div>
        </div>
    );
};

export default Subjects;
