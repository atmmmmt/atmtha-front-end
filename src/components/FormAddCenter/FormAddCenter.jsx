import { Fragment, useRef, useState, useEffect } from "react";
import { Input } from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddCenter } from "../../redux/apiCalls/subscribersApiCall";
import { Centers } from "../../utils/arrays";
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

export const FormAddCenter = () => {
  const addcenter = useRef("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);

  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedCountry(value.label);
    } else {
      setSelectedCountry(""); // Handle case when value is cleared
    }
  };
  useEffect(() => {
    if (state) {
      navigate("/centerSales");
    }
  }, [state, navigate]);
  const handelAddCenter = async (e) => {
    e.preventDefault();
    const country = selectedCountry;
    const center = addcenter.current.center.value;
    const addrres = addcenter.current.addrres.value;
    const phone = addcenter.current.phone.value;
    const infoCenter = {
      governorate: country,
      name: center,
      address: addrres,
      phoneNumber: phone,
    };
    dispatch(AddCenter(setState, infoCenter));
  };

  const country = [
    { label: "حلب" },
    { label: "الرقة" },
    { label: "دير الزور" },
    { label: "الحسكة" },
    { label: "حماة" },
    { label: "اللاذقية" },
    { label: "طرطوس" },
    { label: "حمص" },
    { label: "دمشق" },
    { label: "السويداء" },
    { label: "القنيطرة" },
    { label: "درعا" },
  ];
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            onSubmit={handelAddCenter}
            ref={addcenter}
          >
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="المحافظة"
              >
                المحافظة
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="المحافظة"
                  name="country"
                  options={country}
                  value={selectedCountry}
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
            {Centers.map((material) => {
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
