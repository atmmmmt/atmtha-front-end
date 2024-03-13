import { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetSides, AddCode } from "../../redux/apiCalls/subscribersApiCall";
import Loading from "../Loading";
export const FormAddCodeDepartment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addCodeDepartment = useRef("");
  const [state, setState] = useState(false);
  // Custom styles for react-select
  const selectedSide = "اختبار شامل";
  const loading = useSelector((state) => state.users.delete);
  useEffect(() => {
    dispatch(GetSides());
  }, [dispatch]);
  useEffect(() => {
    if (state) {
      navigate("/codes");
    }
  }, [state, navigate]);
  const handelAddCodeDepartment = async (e) => {
    e.preventDefault();
    const number = addCodeDepartment.current.number.value;
    const expirationDate = addCodeDepartment.current.expirationDate.value;
    const isExam = true;
    const infoCode = {
      number: number,
      expirationDate: expirationDate,
      side: "علمي",
      subject: ["973j3k"],
      isExam: isExam,
    };
    console.log(infoCode);
    dispatch(AddCode(setState, infoCode));
  };
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            ref={addCodeDepartment}
            onSubmit={handelAddCodeDepartment}
          >
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="اسم القسم"
              >
                اسم القسم
              </label>
              <input
                className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                type="text"
                id="اسم القسم"
                value={selectedSide}
              />
            </div>
            <div className="box-input">
              <label
                className="flex items-end mb-[12px] text-[21px] font-[500] text-black  cursor-text"
                htmlFor="تاريخ صلاحية الكود"
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
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="عدد الاكواد"
              >
                عدد الأكواد
              </label>
              <input
                className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                type="number"
                id="عدد الأكواد"
                name="number"
              />
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
