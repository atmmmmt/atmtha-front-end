import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCenters,
  GetCenter,
  DeleteCenter,
} from "../redux/apiCalls/subscribersApiCall";
import { CenterCard } from "./../components/CenterCard/CenterCard";
import Loading from "../components/Loading";
import { PER_PAGE } from "../utils/arrays";

import PaginationCom from "../components/Pagination";
import DrobCenters from "../components/CenterCard/DrobCenters";

export const CenterSales = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [center, setCenter] = useState(null);
  const updateValue = (newValue) => {
    setCenter(newValue);
  };
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(GetCenter(page, PER_PAGE)).then((re) => {
      setCount(Math.ceil(re.documentCount / PER_PAGE));
    });
  }, [dispatch, page]);
  useEffect(() => {
    if (center) {
      dispatch(GetCenters(center, page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re.documentCount / PER_PAGE));
      });
    }
  }, [dispatch, center, page]);
  const centers = useSelector((state) => state.users.centers);
  const loading = useSelector((state) => state.users.loading);
  const navigate = useNavigate();
  const ClickDeleteCenter = async (ID) => {
    dispatch(DeleteCenter(setOpen, ID));
  };
  const country = [
    "حلب",
    "الرقة",
    "دير الزور",
    "الحسكة",
    "حماة",
    "اللاذقية",
    "طرطوس",
    "حمص",
    "دمشق",
    "السويداء",
    "القنيطرة",
    "درعا",
  ];
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <DrobCenters
          label={"المحافظة"}
          text={country}
          updateValue={updateValue}
        />
        <span
          className="text-main text-[18px] underline cursor-pointer"
          onClick={() => navigate("/addCenter")}
        >
          إضافة مركز جديدة
        </span>
      </div>
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loading color="#004556" size="24" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
            {centers.map((center) => {
              return (
                <CenterCard
                  key={center._id}
                  name={center.name}
                  governorate={center.governorate}
                  address={center.address}
                  phoneNumber={center.phoneNumber}
                  ID={center._id}
                  open={open}
                  ondelete={() => ClickDeleteCenter(center._id)}
                />
              );
            })}
          </div>
          <PaginationCom page={page} setPage={setPage} count={count} />
        </div>
      )}
    </Fragment>
  );
};
