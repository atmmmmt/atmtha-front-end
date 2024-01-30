import React, { useState } from "react";
import SubjectCard from "../components/SubjectCard/SubjectCard";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
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
const Subjects = () => {
  const [state, setStaet] = useState(true);
  return (
    <div className="subjects bg-bg calc100 w-[100%] ">
      <div className="flex justify-between mb-[43px] items-center">
        <div className="flex gap-[21px]">
          <button
            onClick={() => setStaet(true)}
            className={`group font-medium transition duration-200 py-[11px] px-[28px]  relative rounded-[10px] ${
              state ? "bg-main text-[white]" : "bg-[white] text-[#8f8f8f]"
            }`}
          >
            علمي
          </button>
          <button
            onClick={() => setStaet(false)}
            className={`group font-medium py-[11px] transition duration-200 px-[28px]  relative rounded-[10px] ${
              !state ? "bg-main text-[white]" : "bg-[white] text-[#8f8f8f]"
            }`}
          >
            أدبي
          </button>
        </div>
        <NavLink to="addSubject">
          <span className="text-main text-[18px] underline cursor-pointer">
            إضافة مادة جديدة
          </span>
        </NavLink>
      </div>
      <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </div>
      <ThemeProvider theme={theme}>
        <div className="flex justify-center w-full mt-[60px]">
          <Pagination
            count={12}
            shape="rounded"
            variant="outlined"
            color="primary"
            dir="ltr"
          />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Subjects;
