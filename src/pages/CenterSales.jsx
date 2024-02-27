import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCenters, DeleteCenter } from "../redux/apiCalls/subscribersApiCall";
import { CenterCard } from "./../components/CenterCard/CenterCard";
import { ThemeProvider, createTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import DrowbSubjects from "../components/QuestionCard/DrowbSubjects";

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
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(GetCenters());
  }, [dispatch]);
  const centers = useSelector((state) => state.users.centers);
  const navigate = useNavigate();
  const ClickDeleteCenter = async (ID) => {
    dispatch(DeleteCenter(setOpen, ID));
  };
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <DrowbSubjects
          value={"المحافظة"}
          text={["حلب", "حلب", "حلب", "حلب", "حلب", "حلب"]}
        />
        <span
          className="text-main text-[18px] underline cursor-pointer"
          onClick={() => navigate("/addCenter")}
        >
          إضافة مركز جديدة
        </span>
      </div>
      <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
        {centers.map((center) => {
          return (
            <CenterCard
              key={center._id}
              name={center.name}
              governorate={center.governorate}
              address={center.address}
              phoneNumber={center.phoneNumber}
              ID={center._id}
              open={open}
              ondelete={() => ClickDeleteCenter(center._id)}
            />
          );
        })}
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
