import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../Input/Input";
import { ThemeProvider, createTheme } from "@mui/material";
import { Users } from "../../utils/arrays";
import { useDispatch } from "react-redux";
import { AddUsers } from "../../redux/apiCalls/subscribersApiCall";
import MiniButton2 from "../MiniButton2";
import MiniButton from "../MiniButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "../../css/account.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#00B0DC",
    },
    text: {
      primary: "#004556",
    },
  },
});
export default function AddAcount(props) {
  const [gnder, setGender] = useState("");
  const addUser = useRef("");
  const dispatch = useDispatch();
  const handelAddUser = (e) => {
    e.preventDefault();
    const username = addUser.current.user.value;
    const phone = addUser.current.phone.value;
    const email = addUser.current.email.value;
    const password = addUser.current.password.value;
    const gender = gnder;
    const infoUser = {
      username: username,
      phoneNumber: phone,
      email: email,
      password: password,
      passwordAgain: password,
      gender: gender,
    };
    dispatch(AddUsers(infoUser));
  };
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0, x: "-50%", y: "-50%" }}
          className="flex w-[613px] h-[680px] flex-col rounded-[15px] shadow-shadow bg-[white] py-[45px] px-[32px] fixed left-[50%] top-[50%] translate-x-1/2 translate-y-1/2 z-50"
        >
          <div className="flex">
            <div className="title flex h-fit ">
              <img
                src="/assests/Profileacount.svg"
                className="w-[20px] ml-[5px]"
                alt=""
              />
              <h3 className="text-[21x] font-bold">إضافة حساب جديد</h3>
            </div>
            <img
              onClick={() => props.setOpen(false)}
              src="/assests/cancle.svg"
              alt=""
              className="absolute cursor-pointer left-[37px] top-[37px]"
            />
          </div>
          <p className="my-[15px]">معلومات الحساب</p>
          <div className="addAccount flex flex-col gap-[20px] px-[10px] overflow-y-auto">
            <form
              className="flex flex-col gap-[35px]"
              onSubmit={handelAddUser}
              ref={addUser}
            >
              {Users.map((material) => {
                return (
                  <Input
                    key={material.id}
                    for={material.label}
                    label={material.label}
                    type={material.type}
                    id={material.label}
                    name={material.name}
                  />
                );
              })}
              <div className=" flex w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer">
                <p>الجنس :</p>
                <ThemeProvider theme={theme}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gnder}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      label="ذكر"
                      control={<Radio size="small" />}
                      value="male"
                      color="primary"
                    />
                    <FormControlLabel
                      label="أثنى"
                      control={<Radio size="small" />}
                      value="female"
                    />
                  </RadioGroup>
                </ThemeProvider>
              </div>
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full  border-2 border-main border-dashed rounded-lg cursor-pointer bg-[#F6F7FB] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center ">
                    <p class=" text-[18px] py-[15px]  text-main">
                      <span class="   text-main">اختر صورة</span> +
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <div className="flex mt-[35px] gap-[15px]">
                <MiniButton
                  title="إرسال"
                  onclick={() => console.log("new user!")}
                  setOpen={props.setOpen}
                />
                <MiniButton2 title="رجوع" setOpen={props.setOpen} />
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
