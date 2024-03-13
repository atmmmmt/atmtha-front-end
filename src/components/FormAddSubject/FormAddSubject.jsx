import { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetSides, AddSubject } from "../../redux/apiCalls/subscribersApiCall";
import { Input } from "../Input/Input";
import { Materials } from "../../utils/arrays";
import { ThemeProvider, createTheme } from "@mui/material";
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
export const FormAddSubject = () => {
  // Custom styles for react-select
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addSubject = useRef("");
  const [state, setState] = useState(false);
  const [selectedSide, setSelectedSide] = useState();
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedSide(value.value);
    } else {
      setSelectedSide(""); // Handle case when value is cleared
    }
  };
  const sides = useSelector((state) => state.users.sides);
  const loading = useSelector((state) => state.users.delete);
  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);
  useEffect(() => {
    if (state) {
      navigate("/");
    }
  }, [state, navigate]);
  const handelAddMaterial = async (e) => {
    e.preventDefault();
    const idSide = selectedSide;
    const name = addSubject.current.material.value;
    const questionDuration = addSubject.current.time.value;
    const infoSubject = {
      name: name,
      questionDuration: questionDuration,
      side: [idSide],
    };
    dispatch(AddSubject(setState, infoSubject));
  };
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            onSubmit={handelAddMaterial}
            ref={addSubject}
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
            {Materials.map((material) => {
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
