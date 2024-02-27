import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import PaginationCom from "../components/Pagination";
import DrowbSubjects from "../components/QuestionCard/DrowbSubjects";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  GetSubjects,
  GetQuestions,
  DeleteQuestions,
} from "../redux/apiCalls/subscribersApiCall";
import { toast } from "react-toastify";

export default function Question() {
  const dispatch = useDispatch();

  const subjects = useSelector((state) => state.users.subjects);
  const questions = useSelector((state) => state.users.questions);
  const [state, setState] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (state) {
      toast.success(`تم حذف السؤال`);
    }
  }, [state]);
  useEffect(() => {
    if (error) {
      toast.error(`تعذر حذف السؤال`);
    }
  }, [error]);
  useEffect(() => {
    dispatch(GetSubjects());
    dispatch(GetQuestions());
  }, [dispatch]);
  const ClickDeleteQuestion = async (ID) => {
    dispatch(DeleteQuestions(state, setState, error, setError, ID));
  };
  return (
    <Fragment>
      <div className="subjects bg-bg  w-[100%] ">
        <div className="flex justify-between mb-[20px] items-center">
          <div className="flex gap-[21px]">
            <DrowbSubjects
              value={"المادة"}
              text={subjects.map((subject) => subject.name)}
            />
          </div>
          <NavLink to="/addQuestion">
            <span className="text-main text-[18px] underline cursor-pointer">
              إضافة سؤال جديدة
            </span>
          </NavLink>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
            {questions?.map((ques, index) => {
              return (
                <QuestionCard
                  ID={ques?._id}
                  ondelete={() => ClickDeleteQuestion(ques._id)}
                  number={`السؤال ${index + 1}`}
                  ques={ques?.question}
                />
              );
            })}
          </div>
          <PaginationCom />
        </div>
      </div>
    </Fragment>
  );
}
