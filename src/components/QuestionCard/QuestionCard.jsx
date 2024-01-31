import React, { useState } from "react";
import Alert from "../Alert";
import Pop from "../Pop";
import { useNavigate } from "react-router-dom";

export default function QuestionCard() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="subjectCard justify-center p-[18px] w-[272px] h-[226px] relative rounded-[15px] shadow-shadow bg-[white] flex flex-col">
            <Alert
                open={open}
                setOpen={setOpen}
                title="حذف السؤال!"
                buttonTitle="تأكيد"
                img="/assests/AlertDeleteSubject.svg"
                paragraph="هل أنت متأكد من حذف السؤال ستحذف أيضا جميع الاسئلة والبيانات؟"
            />
            <Pop open={open} setOpen={setOpen} />
            <img
                src="/assests/editIcon.svg"
                className="w-[19px] h-[19px] absolute left-[20px] top-[20px] cursor-pointer"
                alt=""
                onClick={() => navigate("/editQuestion")}
            />
            <img
                src="/assests/deleteIcon.svg"
                onClick={() => setOpen(true)}
                className="w-[19px] cursor-pointer h-[19px] absolute left-[20px] bottom-[20px]"
                alt=""
            />
            <div className="font-medium">
                <p className="	 text-[20px] mb-[18px]">رقم السؤال</p>{" "}
                <p className="text-[14px]">
                    هنا يتم كتابة نص السؤال , هنا يتم كتابة نص السؤال , هنا يتم
                    كتابة نص السؤال , هنا يتم كتابة نص السؤال , هنا يتم كتابة نص
                    السؤال , هنا يتم كتابة نص السؤال.....
                </p>
            </div>
        </div>
    );
}
