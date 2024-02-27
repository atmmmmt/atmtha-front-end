import React from "react";
export default function MiniButton2(props) {
  return (
    <button
      className=" text-main group w-full py-[14px]  relative bg-[white] rounded-[15px] border-main border-[2px] bor"
      onClick={() => {
        props.setOpen(false);
      }}
    >
      {/* <span className="bg-main  transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-1]"></span> */}
      {props.title}
    </button>
  );
}
