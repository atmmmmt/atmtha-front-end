import { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSides,
  GetSubjects,
  AddPackage,
} from "../../redux/apiCalls/subscribersApiCall";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Loading from "../Loading";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { toast } from "react-toastify";

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

export const FormAddPackgeMaterial = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border: "1px solid #004556",
      borderRadius: "15px",
      minHeight: "46px",
      "&:hover": {
        border: "1px solid #004556",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#004556" : "white",
      color: state.isSelected ? "white" : "#004556",
      "&:hover": {
        backgroundColor: state.isSelected ? "#004556" : "#f2f2f2",
      },
    }),
  };
  const addPackageMaterial = useRef("");
  const [selectedSide, setSelectedSide] = useState();
  const [sideSubject, setSideSubject] = useState();
  const [state, setState] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedSide(value.label);
      setSideSubject(value.value);
    } else {
      setSelectedSide(""); // Handle case when value is cleared
    }
  };
  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);
  const sides = useSelector((state) => state.users.sides);
  const subjects = useSelector((state) => state.users.subjects);
  const loading = useSelector((state) => state.users.delete);
  useEffect(() => {
    if (sideSubject) {
      dispatch(GetSubjects(sideSubject, 1, 1000));
    }
  }, [dispatch, sideSubject]);
  // Custom styles for react-select
  // Function to handle change in the Select component
  useEffect(() => {
    if (state) {
      navigate("/packages");
    }
  }, [state, navigate]);
  const handelAddPackageMaterial = async (e) => {
    e.preventDefault();
    const side = selectedSide;
    const expirationDate = addPackageMaterial.current.expirationDate.value;
    const number = "1";
    const subject = selectedSubjects.map((subject) => subject.value);
    const isExam = false;
    const infoPackage = {
      number: number,
      expirationDate: expirationDate,
      side: side,
      subject: subject,
      isExam: isExam,
    };
    console.log(subject.length);
    if (subject.length > 1) {
      dispatch(AddPackage(setState, infoPackage));
    } else {
      toast.error("يجب عليك اضافة أكثر من مادة");
    }
  };
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            onSubmit={handelAddPackageMaterial}
            ref={addPackageMaterial}
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
                htmlFor="اسم المادة "
              >
                اسم المادة
              </label>
              <Select
                isMulti
                classNamePrefix="react-select"
                styles={customStyles}
                id="اسم المادة"
                options={subjects.map((subject) => ({
                  label: subject.name,
                  value: subject._id,
                }))}
                onChange={(selectedOptions) =>
                  setSelectedSubjects(selectedOptions)
                }
                value={selectedSubjects}
                placeholder=""
              />
            </div>
            <div className="box-input">
              <label
                className="flex items-end mb-[12px] text-[21px] font-[500] text-black  cursor-text"
                for="تاريخ صلاحية الكود"
              >
                تاريخ صلاحية الكود
              </label>
              <select
                className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                id="اسم المادة"
                name="expirationDate"
              >
                <option value="" hidden></option>
                <option value="شهر">شهر</option>
                <option value="ستة أشهر">ستة أشهر</option>
                <option value="سنة">سنة</option>
              </select>
            </div>
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
