import { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../Input/Input";
import { Units } from "../../utils/arrays";
import { request } from "../../utils/request";
import { EditUnits } from "../../redux/apiCalls/subscribersApiCall";
import Loading from "../Loading";

export const FormEditUnits = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editUnits = useRef("");
  const [state, setState] = useState(false);
  const loading = useSelector((state) => state.users.delete);
  const GetUnitByID = async (ID) => {
    try {
      const response = await request.get(`/units/${ID}`);
      const data = response.data;
      editUnits.current.name.value = data?.unitName;
      editUnits.current.number.value = data?.number;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetUnitByID(id);
  }, [id]);
  useEffect(() => {
    if (state) {
      navigate("/units");
    }
  }, [state, navigate]);
  const handelEditUnits = async (e) => {
    e.preventDefault();
    const unitName = editUnits.current.name.value;
    const number = editUnits.current.number.value;
    const infoUnit = {
      unitName: unitName,
      number: number,
    };
    dispatch(EditUnits(setState, id, infoUnit));
  };
  return (
    <Fragment>
      <div className="material-add w-full flex items-start gap-[120px] bg-[white]  py-[70px] px-[80px] rounded-[15px] mt-[43px]">
        <div className="inputs flex-1">
          <form
            className="flex flex-col gap-[35px]"
            ref={editUnits}
            onSubmit={handelEditUnits}
          >
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
