import { Fragment, useState } from "react";
import { Input } from "../Input/Input";
import { Questions1 } from "../../utils/arrays";
import { QuestionInput } from "../QuestionInput/QuestionInput";
import { ThemeProvider, createTheme } from "@mui/material";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const theme = createTheme({
  palette: {
    primary: {
      main: "#042128",
    },
    text: {
      primary: "#042128",
    },
  },
  typography: {
    fontFamily: "Tajawal, sans-serif", // Change the font family here
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          width: "100%",
        },
        inputRoot: {
          width: "100%",
          padding: "0",
          paddingRight: "0px !important",
        },
        input: {
          border: "1px solid #004556",
          padding: "10px 35px 10px 14px !important",
          borderRadius: "15px",
          "&:focus": {
            outline: "none !important",
          },
        },
        popupIndicator: {
          display: "none",
        },
      },
    },
  },
});
export const FormAddQuestion = () => {
  const answer = [
    { label: "الجواب a" },
    { label: "الجواب b" },
    { label: "الجواب c" },
    { label: "الجواب d" },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState();

  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedAnswer(value.label);
    } else {
      setSelectedAnswer(""); // Handle case when value is cleared
    }
  };
  return (
    <Fragment>
      <div className="ques-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form className="flex flex-col gap-[35px]">
            <QuestionInput />
            {Questions1.map((ques) => {
              return (
                <Input
                  key={ques.id}
                  for={ques.label}
                  label={ques.label}
                  type={ques.type}
                  id={ques.label}
                />
              );
            })}
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="الجواب الصحيح"
              >
                الجواب الصحيح
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="المحافظة"
                  name="country"
                  options={answer}
                  value={selectedAnswer}
                  onChange={handleAutocompleteChange}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputLabelProps={{
                        className: "hidden",
                      }}
                    />
                  )}
                />
              </ThemeProvider>
            </div>
            <button className="text-[white] group w-full py-[14px] relative z-10 shadow-shadow rounded-[15px]">
              <span className="bg-main group-hover:scale-[1.01] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-2]"></span>
              حفظ
            </button>
          </form>
        </div>
        <div className="w-[280px] h-[252px] sticky top-[10px]">
          <img
            className="w-full h-full"
            src="/assests/imageInput/person.svg"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};
