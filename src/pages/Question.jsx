import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import QuestionCard from "../components/QuestionCard/QuestionCard";

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
export default function Question() {
  const navigate = useNavigate();

  return (
    <div className="qestion bg-[#f8f8f8] overflow-auto calc100 w-[100%]">
      <div className="flex justify-between mb-[43px] items-center  ">
        <div className="flex gap-[21px]"></div>
        <span
          className="text-main text-[18px] underline cursor-pointer"
          onClick={() => navigate("/addQuestion")}
        >
          إضافة أسئلة جديدة
        </span>
      </div>
      <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
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
}
