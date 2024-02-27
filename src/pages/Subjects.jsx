import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSides,
  GetSubjects,
  DeleteSubject,
} from "../redux/apiCalls/subscribersApiCall";
import SubjectCard from "../components/SubjectCard/SubjectCard";
import PaginationCom from "../components/Pagination";

const Subjects = () => {
  const [sideId, setSideId] = useState("");
  const dispatch = useDispatch();

  const sides = useSelector((state) => state.users.sides);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSideId(sides[0]?.id);
  }, [sides]);
  useEffect(() => {
    dispatch(GetSides());
    dispatch(GetSubjects(sideId));
  }, [dispatch, sideId]);

  const subjects = useSelector((state) => state.users.subjects);
  const ClickDeleteSubject = async (ID) => {
    dispatch(DeleteSubject(setOpen, ID));
  };
  return (
    <div className="subjects bg-bg  w-[100%]  ">
      <div className="flex justify-between mb-[43px] items-center">
        <div className="flex gap-[21px]">
          {sides.map((e) => (
            <button
              key={e.id}
              onClick={() => setSideId(e.id)}
              className={`group font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${
                sideId === e.id
                  ? "bg-main text-[white]"
                  : "bg-[white] text-[#8f8f8f]"
              }`}
            >
              {e.name}
            </button>
          ))}
        </div>
        <NavLink to="/addSubject">
          <span className="text-main text-[18px] underline cursor-pointer">
            إضافة مادة جديدة
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
          {subjects.map((subject) => (
            <SubjectCard
              ID={subject?._id}
              name={subject?.name}
              side={subject?.sideName}
              ondelete={() => ClickDeleteSubject(subject._id)}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
        <PaginationCom />
      </div>
    </div>
  );
};

export default Subjects;
