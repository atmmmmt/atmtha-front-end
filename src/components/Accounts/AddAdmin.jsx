import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../Input/Input";
import { ThemeProvider, createTheme } from "@mui/material";
import { Users } from "../../utils/arrays";
import { useDispatch, useSelector } from "react-redux";
import { AddAdmins } from "../../redux/apiCalls/subscribersApiCall";
import MiniButton2 from "../MiniButton2";
import Loading from "../Loading";
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
    typography: {
      fontFamily: "Tajawal, sans-serif", // Change the font family here
    },
  },
});
export default function AddAdmin(props) {
  const [gnder, setGender] = useState("");
  const [rul, setrole] = useState("");
  const addAdmin = useRef("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.delete);
  const handelAddAdmin = (e) => {
    e.preventDefault();
    const username = addAdmin.current.user.value;
    const phone = addAdmin.current.phone.value;
    const email = addAdmin.current.email.value;
    const password = addAdmin.current.password.value;
    const gender = gnder;
    const role = rul;
    const infoAdmin = {
      username: username,
      phoneNumber: phone,
      email: email,
      password: password,
      gender: gender,
      role: role,
    };
    dispatch(AddAdmins(infoAdmin)).then(() => {
      props.setOpen(false); // Close the AddAdmin component upon successful addition
    });
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
              className="flex flex-col gap-[25px]"
              onSubmit={handelAddAdmin}
              ref={addAdmin}
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
                    required
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
              <div className=" flex w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer">
                <p>الدور :</p>
                <ThemeProvider theme={theme}>
                  <RadioGroup
                    row
                    required
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={rul}
                    onChange={(e) => {
                      setrole(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      label="أدمن"
                      control={<Radio size="small" />}
                      value="admin"
                      color="primary"
                    />
                    <FormControlLabel
                      label="سوبر أدمن"
                      control={<Radio size="small" />}
                      value="superAdmin"
                      color="primary"
                    />
                  </RadioGroup>
                </ThemeProvider>
              </div>
              <div className="flex mt-[35px] gap-[15px]">
                <button className=" text-[white] group w-full py-[14px]  relative ">
                  <span className="bg-main group-hover:scale-[1.02] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-1]"></span>
                  {loading ? <Loading /> : "اضافة أدمن"}
                </button>
                <MiniButton2 title="رجوع" setOpen={props.setOpen} />
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
