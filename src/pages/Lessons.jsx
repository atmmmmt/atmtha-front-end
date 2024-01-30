import { Fragment, useState } from "react";
import { LessonsCard } from "./../components/LessonsCard/LessonsCard";
import { ThemeProvider, createTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";

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
export const Lessons = () => {
  const [state, setStaet] = useState(true);

  return (
    <Fragment>
      <div className="subjects bg-bg calc100 w-[100%] ">
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
        <div className="flex justify-between mt-[25px] items-center">
          <div className="flex items-center gap-[8px]">
            <span>رياضيات</span>
            <span>الوحدة الاولى</span>
            <span>الدرس الأول</span>
          </div>
          <span className="text-main text-[18px] underline cursor-pointer">
            إضافة درس جديدة
          </span>
        </div>
        <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
          <LessonsCard />
          <LessonsCard />
          <LessonsCard />
          <LessonsCard />
          <LessonsCard />
          <LessonsCard />
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
    </Fragment>
  );
};
