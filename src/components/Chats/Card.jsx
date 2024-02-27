import React from "react";

export default function Card() {
    return (
        <div className="flex items-center px-[18px] gap-[10px] py-[10px] border-b-[#F1F3F9] border-b    ">
            <img src="/assests/chatPer.png" alt="" className="w-[45px]" />
            <div className="flex flex-col w-fit">
                <p className="text-[14px] font-medium">عبود</p>
                <p className="text-[11px] w-[80%]">
                    مرحبا هل يمكنك مساعدتي اواجه مشكلة في تفعيل الكود...
                </p>
            </div>
            <div className="flex flex-col flex-1 basis-[20%] items-end justify-between h-full gap-[10px]  ">
                <p className="bg-main rounded-full text-[white] w-[20px] h-[20px] text-[12px] flex items-center justify-center">
                    2
                </p>
                <p className="text-[12px] ltr text-silver">11:55 am</p>
            </div>
        </div>
    );
}
