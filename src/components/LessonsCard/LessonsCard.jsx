import { Fragment, useState } from "react";
import Alert from "../Alert";
import Pop from "../Pop";
export const LessonsCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="subjectCard p-[18px] w-[280px] h-[167px] rounded-[15px] shadow-shadow bg-[white] flex flex-col justify-between">
        <Alert
          open={open}
          setOpen={setOpen}
          title="حذف مادة؟!"
          buttonTitle="تأكيد"
          img="/assests/AlertDeleteSubject.svg"
          paragraph="هل أنت متأكد من حذف المادة ستحذف أيضا جميع الاسئلة والبيانات؟"
        />
        <Pop open={open} setOpen={setOpen} />
        <div className="flex items-center justify-between  ">
          <p className="text-[20px] font-[700]">اسم الدرس</p>
          <img
            src="/assests/editIcon.svg"
            className="w-[19px] h-[19px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="text-[16px]  ">
          <p className="font-[500]">عدد الأسئلة</p>
          <span className="text-main">222</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-main text-[18px] underline cursor-pointer">
            إضافة أسئلة جديدة
          </span>
          <img
            src="/assests/deleteIcon.svg"
            onClick={() => setOpen(true)}
            className="w-[19px] cursor-pointer h-[19px]"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};
