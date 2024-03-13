import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSides,
  GetSubjects,
  DeleteSubject,
} from "../redux/apiCalls/subscribersApiCall";
import { PER_PAGE } from "../utils/arrays";
import Loading from "../components/Loading";
import SubjectCard from "../components/SubjectCard/SubjectCard";
import PaginationCom from "../components/Pagination";
const Subjects = () => {
  const dispatch = useDispatch();

  const sides = useSelector((state) => state.users.sides);
  const loading = useSelector((state) => state.users.loading);
  const [sideId, setSideId] = useState(sides[0]?._id);

  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);
  useEffect(() => {
    if (sides.length > 0) {
      setSideId(sides[0]._id); // Set sideId to the first side's id
    }
  }, [sides]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (sideId) {
      dispatch(GetSubjects(sideId, page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re.documentCount / PER_PAGE));
      });
    }
  }, [dispatch, sideId, page]);

  const subjects = useSelector((state) => state.users.subjects);

  const ClickDeleteSubject = async (ID) => {
    dispatch(DeleteSubject(ID)).then(() => {
      dispatch(GetSubjects(sideId, page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re.documentCount / PER_PAGE));
      });
    });
  };
  return (
    <div className="subjects bg-bg w-[100%] h-full">
      <div className="flex justify-between mb-[43px] items-center">
        <div className="flex gap-[21px]">
          {sides.map((e) => (
            <button
              key={e.id}
              onClick={() => setSideId(e._id)}
              className={`group cursor-pointer font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${
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
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loading color="#004556" size="24" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
            {subjects.map((subject) => (
              <SubjectCard
                name={subject?.name}
                side={subject?.sideName}
                ID={subject?._id}
                ondelete={() => ClickDeleteSubject(subject._id)}
              />
            ))}
          </div>
          <PaginationCom page={page} setPage={setPage} count={count} />
        </div>
      )}
    </div>
  );
};

export default Subjects;
