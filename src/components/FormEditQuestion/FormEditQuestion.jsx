import { Fragment, useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QuestionInput } from "../QuestionInput/QuestionInput";
import { ThemeProvider, createTheme } from "@mui/material";
import { request } from "../../utils/request";
import { EditQuestions } from "../../redux/apiCalls/subscribersApiCall";
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
export const FormEditQuestion = () => {
  const { id } = useParams();
  const editQuestion = useRef("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.delete);

  const answer = [
    { label: "", value: "" },
    { label: "الجواب a", value: "a" },
    { label: "الجواب b", value: "b" },
    { label: "الجواب c", value: "c" },
    { label: "الجواب d", value: "d" },
  ];
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correct, setCorrect] = useState("");
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedAnswer(value.label);
      setCorrect(value.value);
    } else {
      setSelectedAnswer(""); // Handle case when value is cleared
    }
  };
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const GetQuestionByID = async (ID) => {
    try {
      const response = await request.get(`/questions/${ID}`);
      const data = response.data;
      setSelectedAnswer(`الجواب ${data?.correctAnswer}`);
      setImage(data?.imageQuestion.url);
      setCorrect(data?.correctAnswer);
      editQuestion.current.question.value = data?.question;
      editQuestion.current.aAnswer.value = data?.aAnswer;
      editQuestion.current.bAnswer.value = data?.bAnswer;
      editQuestion.current.cAnswer.value = data?.cAnswer;
      editQuestion.current.dAnswer.value = data?.dAnswer;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetQuestionByID(id);
  }, [id]);
  useEffect(() => {
    if (state) {
      navigate("/qestions");
    }
  }, [state, navigate]);
  const handelEditQuestion = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", editQuestion.current.question.value);
    formData.append("aAnswer", editQuestion.current.aAnswer.value);
    formData.append("bAnswer", editQuestion.current.bAnswer.value);
    formData.append("cAnswer", editQuestion.current.cAnswer.value);
    formData.append("dAnswer", editQuestion.current.dAnswer.value);
    formData.append("correctAnswer", correct);
    if (image) {
      formData.append("image", image);
    }
    dispatch(EditQuestions(setState, id, formData));
  };
  return (
    <Fragment>
      <div className="ques-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            ref={editQuestion}
            onSubmit={handelEditQuestion}
          >
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
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="الجواب الصحيح"
              >
                الجواب الصحيح
              </label>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  disablePortal
                  id="الجواب الصحيح"
                  name="answer"
                  options={answer}
                  value={answer.find(
                    (option) => option.label === selectedAnswer
                  )}
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
