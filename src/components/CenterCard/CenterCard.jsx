import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import Alert from "../Alert";
import Pop from "../Pop";
export const CenterCard = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        className="subjectCard p-[18px] w-[280px] h-[171px] rounded-[15px] shadow-shadow bg-[white] flex flex-col justify-between"
        id={props.ID}
      >
        <Alert
          open={open}
          setOpen={setOpen}
          title="حذف المركز؟!"
          buttonTitle="تأكيد"
          img="/assests/AlertDeleteSubject.svg"
          paragraph="هل أنت متأكد من حذف المركز ستحذف أيضا جميع البيانات؟"
          onclick={() => props.ondelete()}
        />
        <Pop open={open} setOpen={setOpen} />
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-[700]">{props.name}</p>
          <img
            onClick={() => navigate(`/editCenter/${props.ID}`)}
            src="/assests/editIcon.svg"
            className="w-[19px] h-[19px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="text-[16px]">
          <p className="font-[500]">{props.governorate}</p>
          <span className="text-main">{props.address}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[16px]  ">
            <p className="font-[500]">رقم الهاتف</p>
            <span className="text-main">{props.phoneNumber}</span>
          </div>
          <img
            src="/assests/deleteIcon.svg"
            onClick={() => setOpen(true)}
            className="w-[16px] cursor-pointer h-[16px]"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};
