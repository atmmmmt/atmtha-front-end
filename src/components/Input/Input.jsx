import { Fragment } from "react";

export const Input = (props) => {
  return (
    <Fragment>
      <div className="box-input">
        <label
          className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
          for={props.for}
        >
          {props.label}
        </label>
        <input
          type={props.type}
          className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
          id={props.id}
          name={props.name}
        />
      </div>
    </Fragment>
  );
};
