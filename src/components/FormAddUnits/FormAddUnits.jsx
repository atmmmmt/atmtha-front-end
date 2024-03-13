import { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input/Input";
import { Units } from "../../utils/arrays";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  GetSides,
  GetSubjects,
  AddUnits,
} from "../../redux/apiCalls/subscribersApiCall";
import Loading from "../Loading";

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
export const FormAddUnits = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addUnits = useRef("");
  const [selectedSide, setSelectedSide] = useState();
  const [sideSubject, setSideSubject] = useState();
  const [state, setState] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState();
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedSide(value.label);
      setSideSubject(value.value);
    } else {
      setSelectedSide(""); // Handle case when value is cleared
    }
  };
  const handleAutocompleteChange1 = (event, value) => {
    if (value) {
      setSelectedSubject(value.value);
    } else {
      setSelectedSubject(""); // Handle case when value is cleared
    }
  };
  const sides = useSelector((state) => state.users.sides);
  const subjects = useSelector((state) => state.users.subjects);
  const loading = useSelector((state) => state.users.delete);
  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);
  useEffect(() => {
    if (sideSubject) {
      dispatch(GetSubjects(sideSubject, 1, 1000));
    }
  }, [dispatch, sideSubject]);
  useEffect(() => {
    if (state) {
      navigate("/units");
    }
  }, [state, navigate]);
  const handleAddUnits = async (e) => {
    e.preventDefault();
    const unitName = addUnits.current.name.value;
    const number = addUnits.current.number.value;
    const subject = selectedSubject;
    const infoUnit = {
      unitName: unitName,
      number: number,
      subject: subject,
    };
    dispatch(AddUnits(setState, infoUnit));
  };
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            ref={addUnits}
            onSubmit={handleAddUnits}
          >
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="اسم الفرع"
              >
                اسم الفرع
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="اسم الفرع"
                  name="country"
                  options={sides.map((side) => ({
                    label: side.name,
                    value: side._id,
                  }))}
                  value={selectedSide}
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
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                for="اسم المادة"
              >
                اسم المادة
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="اسم المادة"
                  name="subject"
                  options={subjects.map((subject) => ({
                    label: subject.name,
                    value: subject._id,
                  }))}
                  value={selectedSubject}
                  onChange={handleAutocompleteChange1}
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
            {Units.map((unit) => {
              return (
                <Input
                  key={unit.id}
                  for={unit.label}
                  label={unit.label}
                  type={unit.type}
                  id={unit.label}
                  name={unit.name}
                />
              );
            })}
            <button className=" text-[white] group w-full py-[14px]  relative z-10 shadow-shadow rounded-[15px]">
              <span className="bg-main group-hover:scale-[1.01] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-2]"></span>
              {loading ? <Loading /> : "حفظ"}
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
