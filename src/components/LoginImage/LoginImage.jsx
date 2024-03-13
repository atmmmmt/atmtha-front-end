import { Fragment } from "react";

export const LoginImage = () => {
  return (
    <Fragment>
      <div className="absolute left-[150px] top-[100px]">
        <img src="/assests/imageLogin/question.svg" alt="" />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src="/assests/imageLogin/computer.svg" alt="" />
      </div>
      <div
        className="absolute right-[50px] bottom-[-40px]"
        style={{ transform: "rotateY(180deg)" }}
      >
        <img src="/assests/imageLogin/question.svg" alt="" />
      </div>
      <div className="absolute right-[100px] top-[0px]">
        <img src="/assests/imageLogin/brain.svg" alt="" />
      </div>
    </Fragment>
  );
};
