import React, { useState } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import NotificationCard from "../components/Notification/NotificationCard";
import PaginationCom from "../components/Pagination";
import Pop from "../components/Pop";
import Alert from "../components/Alert";
import AddNotificationToAll from "../components/Notification/AddNotificationToAll";

const Notification = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <div>
            <AddNotificationToAll open={open2} setOpen={setOpen2} />
            <Alert
                open={open}
                setOpen={setOpen}
                title="حذف الإشعار ؟!"
                buttonTitle="تأكيد"
                img="/assests/AlertDeleteSubject.svg"
                paragraph="هل أنت متأكد من حذف المادة ستحذف أيضا جميع الاسئلة والبيانات؟"
            />
            <Pop open={open} setOpen={setOpen} />
            <Pop open={open2} setOpen={setOpen2} />
            <div className="flex justify-between mb-[20px] items-center">
                <div className="flex gap-[21px]">
                    <HeadInputs title="الإشعارات" />
                </div>
                <span
                    onClick={() => setOpen2(true)}
                    className="text-main text-[18px] underline cursor-pointer"
                >
                    إضافة إشعار جديد
                </span>
            </div>
            <div>
                <div>
                    <NotificationCard setOpen={setOpen} />
                    <NotificationCard setOpen={setOpen} />
                    <NotificationCard setOpen={setOpen} />
                </div>
                <PaginationCom />
            </div>
        </div>
    );
};

export default Notification;
