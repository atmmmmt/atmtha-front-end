import React from "react";

export default function NotificationCard({ setOpen }) {
    return (
        <div className="w-full flex justify-between p-[25px_25px] border-[2px] h-[102px] rounded-[15px] bg-[white] border-[#00B0DC1A] mb-[18px]">
            <div className="flex flex-col justify-evenly ]">
                <h3 className="text-main font-bold text-[16px] mb-[16px]">
                    تحديث التطبيق
                </h3>
                <p className="text-[14px] text-darkBlue ">
                    من متجر غوغل بلاي..... لقد تم تحديث التطبيق وإضافة بعض
                    المزايا يمكنك تحدث التطبيق
                </p>
            </div>
            <div className="flex flex-col justify-between items-end">
                <p className="ltr text-[14px] mb-[20px]">2\2\2024</p>
                <img
                    src="/assests/deleteIcon.svg"
                    className="w-[16px] cursor-pointer"
                    onClick={() => setOpen(true)}
                    alt=""
                />
            </div>
        </div>
    );
}
