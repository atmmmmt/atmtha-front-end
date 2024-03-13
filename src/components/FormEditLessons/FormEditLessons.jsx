import { Fragment, useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/Input";
import { Lesson1 } from "../../utils/arrays";
import { EditLessons } from "../../redux/apiCalls/subscribersApiCall";
import { request } from "../../utils/request";

import Loading from "../Loading";
export const FormEditLessons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const editLesson = useRef("");
  const GetLessonByID = async (ID) => {
    try {
      const response = await request.get(`/lessons/${ID}`);
      const data = response.data;
      editLesson.current.name.value = data?.lessonName;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetLessonByID(id);
  }, [id]);
  const loading = useSelector((state) => state.users.delete);
  const handelEditLessons = async (e) => {
    e.preventDefault();
    const lessonName = editLesson.current.name.value;
    const infoLesson = {
      lessonName: lessonName,
    };
    dispatch(EditLessons(setState, id, infoLesson));
  };
  useEffect(() => {
    if (state) {
      navigate("/lessons");
    }
  }, [state, navigate]);
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            ref={editLesson}
            onSubmit={handelEditLessons}
          >
            {Lesson1.map((material) => {
              return (
                <Input
                  key={material.id}
                  for={material.label}
                  label={material.label}
                  type={material.type}
                  id={material.label}
                  name={material.name}
                />
              );
            })}
            <button className=" text-[white] group w-full py-[14px]  relative z-10 shadow-shadow rounded-[15px]">
              <span className="bg-main group-hover:scale-[1.01] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-2]"></span>
              {loading ? <Loading /> : "حفظ"}
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
