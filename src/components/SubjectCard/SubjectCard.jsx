import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Alert from "../Alert";
import Pop from "../Pop";

export default function SubjectCard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="subjectCard p-[18px] w-[317px] h-[232px] relative rounded-[15px] shadow-shadow bg-[white] flex flex-col gap-[30px] ">
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف مادة؟!"
        buttonTitle="تأكيد"
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف المادة ستحذف أيضا جميع الاسئلة والبيانات؟"
      />
      <Pop open={open} setOpen={setOpen} />
      <img
        src="/assests/editIcon.svg"
        onClick={() => navigate("/editSubject")}
        className="w-[19px] h-[19px] absolute left-[20px] top-[20px] cursor-pointer"
        alt=""
      />
      <img
        src="/assests/deleteIcon.svg"
        onClick={() => setOpen(true)}
        className="w-[19px] cursor-pointer h-[19px] absolute left-[20px] bottom-[20px]"
        alt=""
      />
      <img src="/assests/mathIcon.svg" alt="" className="w-[50px]" />
      <div className="font-medium	 text-[20px]">
        <p>
          اسم المادة : <span>رياضيات</span>
        </p>
        <p>
          الفرع : <span>علمي</span>
        </p>
      </div>
    </div>
  );
}
