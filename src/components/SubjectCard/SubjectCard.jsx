import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import Pop from "../Pop";
export default function SubjectCard(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        className="subjectCard p-[18px] w-[320px] h-[232px] rounded-[15px] shadow-shadow bg-[white] flex flex-col justify-between"
        id={props.ID}
      >
        <Alert
          open={open}
          setOpen={setOpen}
          title="حذف المادة !"
          buttonTitle="تأكيد"
          img="/assests/AlertDeleteSubject.svg"
          paragraph="هل أنت متأكد من حذف المادة ؟"
          onclick={() => props.ondelete()}
        />
        <Pop open={open} setOpen={setOpen} />
        <div className="flex items-center justify-between">
          <img src="/assests/mathIcon.svg" alt="" className="w-[50px]" />
          <img
            src="/assests/editIcon.svg"
            onClick={() => navigate(`/editSubject/${props.ID}`)}
            className="w-[19px] h-[19px] cursor-pointer"
            alt=""
          />
        </div>

        <div className="font-medium	 text-[20px]">
          <p>
            اسم المادة : <span>{props.name}</span>
          </p>
          <p>
            الفرع : <span>{props.side}</span>
          </p>
        </div>
        <div className="flex justify-end">
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
}
