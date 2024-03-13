import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import Pop from "../Pop";
export const UnitsCard = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        className="subjectCard p-[18px] w-[280px] h-[167px] rounded-[15px] shadow-shadow bg-[white] flex flex-col justify-between"
        id={props.ID}
      >
        <Alert
          open={open}
          setOpen={setOpen}
          title="حذف الوحدة!"
          buttonTitle="تأكيد"
          img="/assests/AlertDeleteSubject.svg"
          paragraph="هل أنت متأكد من حذف الوحدة ستحذف أيضا جميع الاسئلة والبيانات؟"
          onclick={() => props.ondelete()}
        />
        <Pop open={open} setOpen={setOpen} />
        <div className="flex items-center justify-between  ">
          <p className="text-[20px] font-[700]">{props.name}</p>
          <img
            src="/assests/editIcon.svg"
            onClick={() => navigate(`/editUnit/${props.ID}`)}
            className="w-[16px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="text-[16px]  ">
          <p className="font-[500]">عدد الدروس</p>
          <span className="text-main">{props.number}</span>
        </div>
        <div className="flex justify-end">
          <img
            src="/assests/deleteIcon.svg"
            onClick={() => setOpen(true)}
            className="w-[16px] cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};
