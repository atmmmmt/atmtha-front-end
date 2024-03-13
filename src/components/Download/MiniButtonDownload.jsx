import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";

export default function MiniButton(props) {
  const load = useSelector((state) => state.users.delete);

  return (
    <button
      className=" text-[white] group w-full py-[14px] cursor-pointer relative"
      onClick={() => {
        props.onclick();
      }}
      disabled={props.load}
    >
      <span className="bg-main group-hover:scale-[1.02] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-1]"></span>
      {load ? <Loading /> : props.title}
    </button>
  );
}
