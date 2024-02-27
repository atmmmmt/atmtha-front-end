import { Fragment } from "react";
import { Input } from "../Input/Input";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Packages } from "../../utils/arrays";
import Loading from "../Loading";
import Select from "react-select";

export const FormAddPackgeDepartment = () => {
  const loading = useSelector((state) => state.users.loading);

  const options = [
    { label: "علمي", value: "علمي" },
    { label: "أدبي", value: "أدبي" },
    { label: "اختبار شامل", value: "اختبار شامل" },
  ];

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

  // Function to handle change in the Select component

  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form className="flex flex-col gap-[35px]">
            <div className="box-input">
              <label
                className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer"
                htmlFor=" اسم القسم"
              >
                اسم القسم
              </label>
              <Select
                classNamePrefix="react-select"
                styles={customStyles}
                id="اسم القسم"
                options={options}
                placeholder=""
              />
            </div>
            {Packages.map((packag) => {
              return (
                <Input
                  key={packag.id}
                  for={packag.label}
                  label={packag.label}
                  type={packag.type}
                  id={packag.label}
                  name={packag.name}
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
