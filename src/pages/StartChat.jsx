import React from "react";

export default function StartChat() {
    return (
        <div className="bg-[white] w-full h-full rounded-[15px] flex justify-center items-center">
            <div className="text-center flex justify-center flex-col items-center gap-[10px]">
                <div className="w-[125px] h-[125px] rounded-full bg-[#F4F5FA] border-[#E1E2E9] border"></div>
                <div>
                    <h2 className=" font-bold">الرسائل</h2>
                    <p className="text-[12px]">
                        انقر على جهة الاتصال لمشاهدة المحادثة هنا
                    </p>
                </div>
            </div>
        </div>
    );
}
