import { Fragment } from "react";
import Select from "react-select";

export const FormAddCodeDepartment = () => {
  const side = [{ label: "علمي" }, { label: "أدبي" }];
  // Custom styles for react-select
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
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form className="flex flex-col gap-[35px]">
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor="اسم الفرع"
              >
                اسم الفرع
              </label>
              <Select
                classNamePrefix="react-select"
                styles={customStyles}
                id="اسم الفرع"
                isMulti
                options={side}
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
                for="اسم المادة"
              >
                اسم المادة
              </label>
              <input
                type="text"
                className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                id="اسم المادة"
              />
            </div>
            <button className=" text-[white] group w-full py-[14px]  relative z-10 shadow-shadow rounded-[15px]">
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
