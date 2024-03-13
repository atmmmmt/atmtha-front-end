import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import PaginationCom from "../components/Pagination";
// import DrowbSubjects from "../components/DrowbSubjects/DrowbSubjects";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

import { useEffect } from "react";
import {
  // GetSubjects,
  GetQuestions,
  DeleteQuestions,
} from "../redux/apiCalls/subscribersApiCall";
import { PER_PAGE } from "../utils/arrays";

export default function Question() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  // const subjects = useSelector((state) => state.users.subjects);
  const loading = useSelector((state) => state.users.loading);
  const questions = useSelector((state) => state.users.questions);
  useEffect(() => {
    // dispatch(GetSubjects());
    dispatch(GetQuestions());
  }, [dispatch]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(GetQuestions(page, PER_PAGE)).then((re) => {
      setCount(Math.ceil(re.documentCount / PER_PAGE));
    });
  }, [dispatch, page]);
  const ClickDeleteQuestion = async (ID) => {
    dispatch(DeleteQuestions(setOpen, ID)).then(() => {
      dispatch(GetQuestions(page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re.documentCount / PER_PAGE));
      });
    });
  };
  return (
    <Fragment>
      <div className="subjects bg-bg w-[100%] h-full">
        <div className="flex justify-between mb-[20px] items-center">
          <div className="flex gap-[21px]">
            <span>المادة</span>
          </div>
          <NavLink to="/addQuestion">
            <span className="text-main text-[18px] underline cursor-pointer">
              إضافة سؤال جديدة
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
              {questions?.map((ques, index) => {
                return (
                  <QuestionCard
                    ID={ques?._id}
                    number={`السؤال ${index + 1}`}
                    ques={ques?.question}
                    open={open}
                    setOpen={setOpen}
                    ondelete={() => ClickDeleteQuestion(ques._id)}
                  />
                );
              })}
            </div>
            <PaginationCom page={page} setPage={setPage} count={count} />
          </div>
        )}
      </div>
    </Fragment>
  );
}
