import React from "react";
import Card from "./Card";

export default function Chats() {
    return (
        <div className="w-[500px] bg-[white] rounded-[15px]">
            <div className="flex justify-between px-[30px] pt-[40px] font-bold text-[16px]">
                <h3>جميع الرسائل</h3>
                <p className="text-[18px] font-medium">(12)</p>
            </div>
            <div className="px-[28px] mt-[30px]">
                <div className="input h-[35px]  flex items-center pr-[10px] border-[1px] border-solid border-silver rounded-[10px] bg-[#f9f9f9] ">
                    <label
                        className="w-[20px] h-[20px] cursor-text"
                        for="search"
                    >
                        <img src="/assests/headerIcon/search.svg" alt="" />
                    </label>
                    <input
                        id="search"
                        className="w-full h-full bg-transparent bg-[#f9f9f9] p-[10px] rounded-[10px] text-[13px] placeholder:text-[12px] focus: outline-none"
                        type="text"
                        placeholder="اكتب هنا للبحث"
                    />
                </div>
            </div>
            <div className="chats mt-[15px] h-[400px] overflow-y-scroll">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
