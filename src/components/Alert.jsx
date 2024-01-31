import React from "react";
import MiniButton from "./MiniButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Alert(props) {
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0, x: "-50%", y: "-50%" }}
          className="flex h-[333px] justify-evenly alert text-center w-[579px]  px-[124px] text-[18px] rounded-[15px] shadow-shadow pb-[48px] pt-[80px] bg-[white] items-center fixed flex-col left-[50%] top-[50%] translate-x-1/2 translate-y-1/2 z-50"
        >
          <img
            onClick={() => props.setOpen(false)}
            src="/assests/cancle.svg"
            alt=""
            className="absolute cursor-pointer left-[37px] top-[37px]"
          />
          <div className="title flex">
            <h3 className="font-bold">{props.title}</h3>
            {props.done && <img src="/assests/true.svg" alt="" />}
          </div>
          <p className="font-medium">{props.paragraph}</p>
          {props.code && (
            <div className="flex gap-[5px] items-center">
              <span className="font-bold">{props.code}</span>
              <img src="/assests/parcode.svg" alt="" />
            </div>
          )}
          <MiniButton title={props.buttonTitle} setOpen={props.setOpen} />
          <img
            src={props.img}
            className="absolute bottom-0 right-[18px]"
            alt=""
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
