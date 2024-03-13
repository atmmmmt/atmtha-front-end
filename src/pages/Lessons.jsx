import { Fragment, useState, useEffect } from "react";
import { LessonsCard } from "./../components/LessonsCard/LessonsCard";
import DrowbSubjects from "../components/DrowbSubjects/DrowbSubjects";
import DrobUnits from "../components/DrobUnits/DrobUnits";
import PaginationCom from "../components/Pagination";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

import { useSelector, useDispatch } from "react-redux";
import {
  GetUnits,
  GetLessons,
  DeleteLessons,
  GetSubjects,
  GetSides,
} from "../redux/apiCalls/subscribersApiCall";
import { getIdCookie } from "../utils/cockies";

export const Lessons = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const units = useSelector((state) => state.users.units);
  const sides = useSelector((state) => state.users.sides);
  const [value, setValue] = useState(null);
  const [valueUnit, setValueUnits] = useState(null);
  const subjects = useSelector((state) => state.users.subjects);
  const loading = useSelector((state) => state.users.loading);
  const token = getIdCookie().token;
  const [sideId, setSideId] = useState(sides[0]?._id);
  const updateValue = (newValue) => {
    setValue(newValue);
  };
  const updateValueUnits = (newValue) => {
    setValueUnits(newValue);
  };

  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);

  useEffect(() => {
    if (sides.length > 0) {
      setSideId(sides[0]._id); // Set sideId to the first side's id
    }
  }, [sides]);

  useEffect(() => {
    if (sideId) {
      dispatch(GetSubjects(sideId, 1, 1000));
    }
  }, [dispatch, sideId]);

  useEffect(() => {
    if (value) {
      dispatch(GetUnits(token, value, 1, 1000));
    }
  }, [dispatch, token, value]);
  const lessons = useSelector((state) => state.users.lessons);
  useEffect(() => {
    if (valueUnit) {
      dispatch(GetLessons(valueUnit, 1, 1000));
    }
  }, [dispatch, valueUnit]);
  const ClickDeleteLesson = async (ID) => {
    dispatch(DeleteLessons(setOpen, ID));
  };
  console.log(valueUnit);
  console.log(lessons);
  return (
    <Fragment>
      <div className="lessons bg-bg w-[100%] h-full">
        <div className="flex gap-[21px]">
          {sides.map((e) => (
            <button
              key={e.id}
              onClick={() => setSideId(e._id)}
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
        <div className="flex justify-between mt-[25px] items-center">
          <div className="flex items-center gap-[8px]">
            <DrowbSubjects
              label="المادة"
              text={subjects}
              value={value}
              updateValue={updateValue}
              sideId={sideId} // Pass sideId as a prop to DrowbSubjects
            />
            <DrobUnits
              label="الوحدة"
              text={units}
              valueUnit={valueUnit}
              updateValue={updateValueUnits}
              sideId={sideId}
            />
          </div>
          <NavLink to="/addLesson">
            <span className="text-main text-[18px] underline cursor-pointer">
              إضافة درس جديدة
            </span>
          </NavLink>
        </div>
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            <Loading color="#004556" size="24" />
          </div>
        ) : valueUnit === null ? (
          <p className="flex justify-center font-[600] text-[24px]">
            لايوجد دروس اختر المادة والوحدة . . .
          </p>
        ) : lessons.length === 0 ? (
          <p className="flex justify-center font-[600] text-[24px]">
            لايوجد دروس اختر المادة والوحدة . . .
          </p>
        ) : (
          <div className="flex flex-col h-full">
            <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
              {lessons?.map((lesson) => {
                return (
                  <LessonsCard
                    key={lesson._id}
                    name={lesson?.lessonName}
                    number={lesson?.questions?.length}
                    ID={lesson._id}
                    open={open}
                    ondelete={() => ClickDeleteLesson(lesson._id)}
                  />
                );
              })}
            </div>
            <PaginationCom />
          </div>
        )}
      </div>
    </Fragment>
  );
};
