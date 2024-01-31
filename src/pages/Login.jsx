import { Fragment } from "react";
import { LoginImage } from "../components/LoginImage/LoginImage";
import "../css/login.css";
export const Login = () => {
  return (
    <Fragment>
      <div className="relative w-screen h-screen bg-main flex justify-center items-center overflow-hidden">
        <LoginImage />
        <div className="relative bg-[#fff] w-[506px] h-[642px] p-[25px] flex flex-col items-center rounded-[15px]">
          <div className="w-[145px]">
            <img
              className="max-w-full max-h-full"
              src="/assests/mainLogo.png"
              alt=""
            />
          </div>
          <div className="text-center mb-[35px]">
            <p className="text-black font-[700] text-[28px] mb-[10px]">
              مرحبا بك!
            </p>
            <span className="text-silver text-[16px] font-[700]">
              سجل دخول إلى حسابك
            </span>
          </div>
          <form className="w-[80%]">
            <div className="w-full border-[2px] border-solid border-silver rounded-[15px]">
              <div className="w-full  border-b-[2px] border-b-solid border-b-silver">
                <input
                  className="w-full px-[10px] py-[16px] bg-transparent  text-[16px] rounded-[15px]  focus: outline-none placeholder: font-[400]"
                  type="email"
                  placeholder="البريد الإلكتروني"
                  name="email"
                />
              </div>
              <div className="w-full px-[10px] py-[16px]">
                <input
                  className="w-full bg-transparent  text-[16px]  focus: outline-none placeholder: font-[400]"
                  type="password"
                  placeholder="كلمة المرور"
                  name="password"
                />
              </div>
            </div>
            <button className="btnLogin relative w-full py-[10px] text-[white] text-[18px] font-[700] bg-none mt-[30px] z-[1]">
              تسجيل دخول
            </button>
          </form>
          <div className="absolute right-0 bottom-0">
            <img src="/assests/imageLogin/personLogin.svg" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
