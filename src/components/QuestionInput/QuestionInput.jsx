import { Fragment } from "react";

export const QuestionInput = () => {
  return (
    <Fragment>
      <div className="box-input flex justify-between">
        <div className="basis-[45%]">
          <label
            className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
            for="اسم الوحدة"
          >
            اسم الوحدة
          </label>
          <input
            type="type"
            className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
            id="اسم الوحدة"
          />
        </div>
        <div className="basis-[45%]">
          <label
            className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
            for="اسم الدرس"
          >
            اسم الدرس
          </label>
          <input
            type="type"
            className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
            id="اسم الدرس"
          />
        </div>
      </div>
      <div className="box-input">
        <label
          className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
          for="تحميل صورة"
        >
          تحميل صورة
        </label>
        <label
          className="block px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px]"
          for="تحميل صورة"
        >
          <img
            className="w-[24px] h-[24px]"
            src="/assests/questionImage/camera.svg"
            alt=""
          />
        </label>
        <input
          type="file"
          className="hidden w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
          id="تحميل صورة"
        />
      </div>
      <div className="box-input">
        <label className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer">
          نص السؤال
        </label>
        <textarea className="w-full h-[93px] resize-none px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none" />
      </div>
      <div className="box-input">
        <label
          className="flex items-end mb-[12px] text-[21px] font-[500] text-black  cursor-text"
          for="مستوى السؤال"
        >
          مستوى السؤال
        </label>
        <select
          className="w-full px-[14px] py-[10px] border-solid border-[1px] border-black rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
          id="اسم المادة"
        >
          <option value="" hidden></option>
          <option value="صعب">صعب</option>
          <option value="متوسط">متوسط</option>
          <option value="سهل">سهل</option>
        </select>
      </div>
    </Fragment>
  );
};
