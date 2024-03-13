import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

import { UnitsCard } from "./../components/UnitsCard/UnitsCard";
import DrowbSubjects from "../components/DrowbSubjects/DrowbSubjects";
import PaginationCom from "../components/Pagination";
import {
  GetUnits,
  GetSides,
  GetSubjects,
  DeleteUnits,
} from "../redux/apiCalls/subscribersApiCall";
import { getIdCookie } from "../utils/cockies";
import { PER_PAGE } from "../utils/arrays";

export const Units = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const units = useSelector((state) => state.users.units);
  const sides = useSelector((state) => state.users.sides);
  const loading = useSelector((state) => state.users.loading);
  const [value, setValue] = useState(null);
  const updateValue = (newValue) => {
    setValue(newValue);
  };
  const [sideId, setSideId] = useState(sides[0]?._id);

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

  const subjects = useSelector((state) => state.users.subjects);
  const token = getIdCookie().token;

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (value) {
      dispatch(GetUnits(token, value, page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re.documentCount / PER_PAGE));
      });
    }
  }, [dispatch, token, value, page]);

  const ClickDeleteUnits = async (ID) => {
    dispatch(DeleteUnits(setOpen, ID)).then(() => {
      dispatch(GetUnits(token, value, page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re.documentCount / PER_PAGE));
      });
    });
  };
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
          </div>
          <NavLink to="/addUnit">
            <span className="text-main text-[18px] underline cursor-pointer">
              إضافة وحدة جديدة
            </span>
          </NavLink>
        </div>
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            <Loading color="#004556" size="24" />
          </div>
        ) : value === null ? (
          <p className="flex justify-center font-[600] text-[24px]">
            لايوجد وحدات اختر المادة . . .
          </p>
        ) : units.length === 0 ? (
          <p className="flex justify-center font-[600] text-[24px]">
            لايوجد وحدات اختر المادة . . .
          </p>
        ) : (
          <>
            <div className="flex flex-col h-full">
              <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
                {units?.map((unit) => {
                  return (
                    <UnitsCard
                      key={unit._id}
                      name={unit?.unitName}
                      number={unit?.number}
                      ID={unit._id}
                      open={open}
                      ondelete={() => ClickDeleteUnits(unit._id)}
                    />
                  );
                })}
              </div>
              <PaginationCom page={page} setPage={setPage} count={count} />
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};
