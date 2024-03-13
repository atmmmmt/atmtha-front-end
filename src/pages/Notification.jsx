import React, { useState } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import NotificationCard from "../components/Notification/NotificationCard";
import PaginationCom from "../components/Pagination";
import Pop from "../components/Pop";
import AddNotificationToAll from "../components/Notification/AddNotificationToAll";

const Notification = () => {
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <AddNotificationToAll open={open2} setOpen={setOpen2} />
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
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
        <PaginationCom />
      </div>
    </div>
  );
};

export default Notification;
