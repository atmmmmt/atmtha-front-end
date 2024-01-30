import { Fragment } from "react";
import { CenterCard } from "./../components/CenterCard/CenterCard";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
export const CenterSales = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <span>حلب</span>
        <span
          className="text-main text-[18px] underline cursor-pointer"
          onClick={() => navigate("/addCenter")}
        >
          إضافة مركز جديدة
        </span>
      </div>
      <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
        <CenterCard />
        <CenterCard />
        <CenterCard />
        <CenterCard />
        <CenterCard />
        <CenterCard />
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
    </Fragment>
  );
};
