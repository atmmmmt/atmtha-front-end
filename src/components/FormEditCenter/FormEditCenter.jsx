import { Fragment, useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditCenter } from "../../redux/apiCalls/subscribersApiCall";
import { Input } from "../Input/Input";
import { Centers } from "../../utils/arrays";
import { ThemeProvider, createTheme } from "@mui/material";
import { request } from "../../utils/request";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Loading from "../Loading";

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

export const FormEditCenter = () => {
  const { id } = useParams();
  const editcenter = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setErorr] = useState(null);
  const [state, setState] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const loading = useSelector((state) => state.users.loading);
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedCountry(value.label);
    } else {
      setSelectedCountry(""); // Handle case when value is cleared
    }
  };
  const country = [
    { label: "" },
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
  //get center by ID:
  const GetCenterByID = async (ID) => {
    try {
      const response = await request.get(`/centers/${ID}`);
      const data = response.data;
      setSelectedCountry(data?.governorate);
      editcenter.current.center.value = data?.name;
      editcenter.current.addrres.value = data?.address;
      editcenter.current.phone.value = data?.phoneNumber;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCenterByID(id);
  }, [id]);
  useEffect(() => {
    if (state) {
      toast.success(`تم تعديل مركز`);
      navigate("/centerSales");
    }
  }, [state, navigate]);
  useEffect(() => {
    if (error) {
      toast.error(`تعذر تعديل مركز`);
    }
  }, [error]);
  const handelEditCenter = async (e) => {
    e.preventDefault();
    const country = selectedCountry;
    const center = editcenter.current.center.value;
    const address = editcenter.current.addrres.value;
    const phone = editcenter.current.phone.value;
    const editedCenter = {
      governorate: country,
      name: center,
      address: address,
      phoneNumber: phone,
    };
    dispatch(EditCenter(state, setState, error, setErorr, id, editedCenter));
  };

  return (
    <Fragment>
      <div className="center-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            ref={editcenter}
            onSubmit={handelEditCenter}
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
                  options={country}
                  value={country.find(
                    (option) => option.label === selectedCountry
                  )}
                  onChange={handleAutocompleteChange}
                  onBlur={() => console.log("blur")}
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
            {Centers.map((center) => {
              return (
                <Input
                  key={center.id}
                  for={center.label}
                  label={center.label}
                  type={center.type}
                  id={center.label}
                  name={center.name}
                />
              );
            })}
            <button className=" text-[white] group w-full py-[14px]  relative z-10 shadow-shadow rounded-[15px]">
              <span className="bg-main group-hover:scale-[1.01] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-2]"></span>
              {loading ? <Loading /> : "حفظ"}
            </button>{" "}
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
