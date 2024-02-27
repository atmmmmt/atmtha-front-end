import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../Input/Input";
import MiniButton from "../MiniButton";
import MiniButton2 from "../MiniButton2";
export default function AddnotificationToUser(props) {
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0, x: "-50%", y: "-50%" }}
          className="flex w-[613px] h-[680px]  flex-col     rounded-[15px] shadow-shadow bg-[white] py-[45px] px-[32px] fixed left-[50%] top-[50%] translate-x-1/2 translate-y-1/2 z-50"
        >
          <div className="flex ">
            <div className="title flex h-fit ">
              <img
                src="/assests/Notification.svg"
                className="w-[20px] ml-[5px]"
                alt=""
              />
              <h3 className="text-[21x] font-bold">إضافة إشعار جديد</h3>
            </div>
            <img
              onClick={() => props.setOpen(false)}
              src="/assests/cancle.svg"
              alt=""
              className="absolute cursor-pointer left-[37px] top-[37px]"
            />
          </div>
          <p className="mt-[35px] mb-[43px]">معلومات الإشعار</p>
          <div className="flex flex-col gap-[31px]">
            <Input for="addres" id="addres" label="عنوان الإشعار" />
            <Input for="addres" id="addres" label="نص الإشعار" />
            <Fragment>
              <div className="box-input">
                <label className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer">
                  موجهة إلى
                </label>
                <input
                  type="text"
                  className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                  value={props.name}
                  readOnly
                />
              </div>
            </Fragment>
          </div>
          <div className="flex mt-[57px] gap-[15px]">
            <MiniButton id={props.id} title="ارسال" setOpen={props.setOpen} />
            <MiniButton2 title="رجوع" setOpen={props.setOpen} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
