import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Alert from "../Alert";
import Pop from "../Pop";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
const theme = createTheme({
  typography: {
    fontFamily: "Tajawal, sans-serif", // Change the font family here
    fontSize: 18, // Change the font size here
  },
});
export default function QuestionCard(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="subjectCard p-[18px] w-[272px] h-[226px] relative rounded-[15px] shadow-shadow bg-[white] flex flex-col gap-[10px]"
      id={props.ID}
    >
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف السؤال!"
        buttonTitle="تأكيد"
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف السؤال ؟"
        onclick={() => props.ondelete()}
      />
      <Pop open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between">
        <p className="text-[20px]">{props.number}</p>
        <img
          src="/assests/editIcon.svg"
          className="w-[19px] h-[19px] cursor-pointer"
          alt=""
          onClick={() => navigate(`/editQuestion/${props.ID}`)}
        />
      </div>
      <ThemeProvider theme={theme}>
        <Tooltip title={props.ques} TransitionComponent={Zoom}>
          <p className="text-[14px] font-medium text-ellipsis overflow-hidden ...">
            {props.ques}
          </p>
        </Tooltip>
      </ThemeProvider>
      <div className="flex justify-end">
        <img
          src="/assests/deleteIcon.svg"
          onClick={() => setOpen(true)}
          className="w-[19px] cursor-pointer h-[19px] absolute left-[20px] bottom-[20px]"
          alt=""
        />
      </div>
    </div>
  );
}
