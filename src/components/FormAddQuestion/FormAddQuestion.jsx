import { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeadInputs } from "../HeadInputs/HeadInputs";

import {
  GetSides,
  GetSubjects,
  GetUnits,
  GetLessons,
  AddQuestions,
  ExcelFile,
  // ExcelFile,
} from "../../redux/apiCalls/subscribersApiCall";
import { ThemeProvider, createTheme } from "@mui/material";
import { getIdCookie } from "../../utils/cockies";
import { QuestionInput } from "../QuestionInput/QuestionInput";
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
export const FormAddQuestion = () => {
  const answer = [
    { label: "الجواب a", value: "a" },
    { label: "الجواب b", value: "b" },
    { label: "الجواب c", value: "c" },
    { label: "الجواب d", value: "d" },
  ];
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addQuestion = useRef("");
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [selectedSide, setSelectedSide] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [selectedUnit, setSelectedUnit] = useState();
  const [selectedLesson, setSelectedLesson] = useState();
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedSide(value.value);
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
  const handleAutocompleteChange2 = (event, value) => {
    if (value) {
      setSelectedUnit(value.value);
    } else {
      setSelectedUnit(""); // Handle case when value is cleared
    }
  };
  const handleAutocompleteChange3 = (event, value) => {
    if (value) {
      setSelectedLesson(value.value);
    } else {
      setSelectedLesson(""); // Handle case when value is cleared
    }
  };
  const handleAutocompleteChange4 = (event, value) => {
    if (value) {
      setSelectedAnswer(value.value);
    } else {
      setSelectedAnswer(""); // Handle case when value is cleared
    }
  };
  const sides = useSelector((state) => state.users.sides);
  const subjects = useSelector((state) => state.users.subjects);
  const lessons = useSelector((state) => state.users.lessons);
  const token = getIdCookie().token;
  const units = useSelector((state) => state.users.units);
  const loading = useSelector((state) => state.users.delete);
  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);
  useEffect(() => {
    if (selectedSide) {
      dispatch(GetSubjects(selectedSide, 1, 1000));
    }
  }, [dispatch, selectedSide]);
  useEffect(() => {
    if (selectedSubject) {
      dispatch(GetUnits(token, selectedSubject, 1, 1000));
    }
  }, [dispatch, token, selectedSubject]);
  useEffect(() => {
    if (selectedUnit) {
      dispatch(GetLessons(selectedUnit, 1, 1000));
    }
  }, [dispatch, selectedUnit]);
  useEffect(() => {
    if (state) {
      navigate("/qestions");
    }
  }, [state, navigate]);
  const [image, setImage] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handelAddQuestion = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", addQuestion.current.question.value);
    formData.append("aAnswer", addQuestion.current.aAnswer.value);
    formData.append("bAnswer", addQuestion.current.bAnswer.value);
    formData.append("cAnswer", addQuestion.current.cAnswer.value);
    formData.append("dAnswer", addQuestion.current.dAnswer.value);
    formData.append("difficulty", addQuestion.current.level.value);
    formData.append("correctAnswer", selectedAnswer);
    formData.append("lesson", selectedLesson);
    formData.append("subject", selectedSubject);
    formData.append("unit", selectedUnit);
    if (image && !excelFile) {
      formData.append("image", image);
      dispatch(AddQuestions(setState, formData));
    }
    if (excelFile) {
      const formData1 = new FormData();
      formData1.append("excelFile", excelFile);
      dispatch(
        ExcelFile(
          setState,
          selectedLesson,
          selectedUnit,
          selectedSubject,
          formData1
        )
      );
    }
    if (!image && !excelFile) {
      dispatch(AddQuestions(setState, formData));
    }
  };
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setExcelFile(selectedFile);
  };
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <HeadInputs title="إضافة سؤال" />
        <div>
          <label
            className="flex items-center text-main text-[18px] font-[700] underline gap-[5px] cursor-pointer"
            htmlFor="excel"
          >
            <img src="/assests/questionImage/excel.svg" alt="" />
            رفع ملف أسئلة
          </label>
          <input
            className="hidden"
            id="excel"
            type="file"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="ques-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            onSubmit={handelAddQuestion}
            ref={addQuestion}
          >
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor=" اسم الفرع"
              >
                اسم الفرع
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id=" اسم الفرع"
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
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                for="اسم الوحدة"
              >
                اسم الوحدة
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="اسم الوحدة"
                  name="unit"
                  options={units.map((unit) => ({
                    label: unit.unitName,
                    value: unit._id,
                  }))}
                  value={selectedUnit}
                  onChange={handleAutocompleteChange2}
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
                for="اسم الدرس"
              >
                اسم الدرس
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="اسم الدرس"
                  name="lesson"
                  options={lessons.map((lesson) => ({
                    label: lesson.lessonName,
                    value: lesson._id,
                  }))}
                  value={selectedLesson}
                  onChange={handleAutocompleteChange3}
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
                for="تحميل صورة"
              >
                تحميل صورة
              </label>
              <label
                className="flex items-center gap-[8px] px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px]"
                for="تحميل صورة"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src="/assests/questionImage/camera.svg"
                  alt=""
                />
                {image ? (
                  <span className="text-[14px] font-[500]">{image?.name}</span>
                ) : null}
              </label>
              <input
                type="file"
                className="hidden w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                id="تحميل صورة"
                onChange={handleImageChange}
              />
            </div>
            <div className="box-input">
              <label className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer">
                نص السؤال
              </label>
              <textarea
                className="w-full h-[93px] resize-none px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                name="question"
              />
            </div>
            <QuestionInput />
            <div className="box-input">
              <label
                className="flex items-end mb-[12px] text-[21px] font-[500] text-black  cursor-text"
                htmlFor="مستوى السؤال"
              >
                مستوى السؤال
              </label>
              <select
                className="w-full px-[14px] py-[10px] border-solid border-[1px] border-black rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                id="مستوى السؤال"
                name="level"
              >
                <option value="" hidden></option>
                <option value="صعب">صعب</option>
                <option value="متوسط">متوسط</option>
                <option value="سهل">سهل</option>
              </select>
            </div>
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
                  onChange={handleAutocompleteChange4}
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
