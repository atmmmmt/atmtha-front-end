import React, { useState } from "react";
import Alert from "../Alert";
import Pop from "../Pop";

export default function ChatCards(props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="subjectCard p-[18px] w-[272px] h-[226px] relative rounded-[15px] shadow-shadow bg-[white] flex flex-col gap-[20px]"
      id={props.ID}
    >
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف السؤال!"
        buttonTitle="تأكيد"
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف السؤال ؟"
        onclick={() => props.ondelete()}
      />
      <Pop open={open} setOpen={setOpen} />
      <div className="flex items-center gap-[10px]">
        <p className="text-[16px] font-[500]">من</p>
        <p className="text-[16px] font-[500] text-main">محمد سالم نجار</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[16px] font-[500]">المشكلة :</p>
        <p className="text-[16px] font-[500] text-main">cnajcabchabcjacbj</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[16px] font-[500]">رقم الموبايل</p>
        <p className="text-[16px] font-[500] text-main">0936326777</p>
      </div>
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
