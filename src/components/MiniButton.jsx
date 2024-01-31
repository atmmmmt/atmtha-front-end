import React from "react";
export default function MiniButton(props) {
  return (
    <button
      className=" text-[white] group w-full py-[14px]  relative "
      onClick={() => props.setOpen(false)}
    >
      <span className="bg-main group-hover:scale-[1.02] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-1]"></span>
      {props.title}
    </button>
  );
}
