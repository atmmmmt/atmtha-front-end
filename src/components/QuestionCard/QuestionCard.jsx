import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import Pop from "../Pop";

export default function QuestionCard(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="subjectCard p-[18px] w-[272px] h-[226px] relative rounded-[15px] shadow-shadow bg-[white] flex flex-col justify-between"
      id={props.ID}
    >
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف السؤال!"
        buttonTitle="تأكيد"
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف السؤال ستحذف أيضا جميع الاسئلة والبيانات؟"
        onclick={props.ondelete()}
      />
      <Pop open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between">
        <p className="text-[20px]">{props.number}</p>
        <img
          src="/assests/editIcon.svg"
          className="w-[19px] h-[19px] cursor-pointer"
          alt=""
          onClick={() => navigate(`/editQuestion/${props.ID}`)}
        />
      </div>
      <p className="text-[14px] font-medium">{props.ques}</p>
      <div className="flex justify-end">
        <img
          src="/assests/deleteIcon.svg"
          onClick={() => setOpen(true)}
          className="w-[19px] cursor-pointer h-[19px] absolute left-[20px] bottom-[20px]"
          alt=""
        />
      </div>
    </div>
  );
}
