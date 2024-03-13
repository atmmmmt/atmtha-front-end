import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";

export default function MiniButton(props) {
  const delte = useSelector((state) => state.users.delete);

  return (
    <button
      className=" text-[white] group w-full py-[14px] relative cursor-pointer"
      onClick={() => {
        props.onclick();
      }}
      disabled={delte ? true : false}
    >
      <span className="bg-main group-hover:scale-[1.02] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-1] cursor-pointer"></span>
      {delte ? <Loading /> : props.title}
    </button>
  );
}
