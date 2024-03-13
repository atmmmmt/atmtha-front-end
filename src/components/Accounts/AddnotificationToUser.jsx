import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../Input/Input";
import { Notifcation } from "../../utils/arrays";
import { useDispatch, useSelector } from "react-redux";
import { PostNotifcation } from "../../redux/apiCalls/subscribersApiCall";
import MiniButton2 from "../MiniButton2";
import Loading from "../Loading";
export default function AddnotificationToUser(props) {
  const addNotification = useRef("");
  const loading = useSelector((state) => state.users.delete);
  const dispatch = useDispatch();
  const handelAddNotification = async (e) => {
    e.preventDefault();
    const title = addNotification.current.title.value;
    const body = addNotification.current.body.value;
    const id = props.id;
    const infoNotification = {
      title: title,
      body: body,
      user: id,
    };
    dispatch(PostNotifcation(infoNotification)).then(() => {
      props.setOpen(false); // Close the AddNotification component upon successful addition
    });
  };
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 0, x: "-50%", y: "-50%" }}
          className="flex w-[613px] h-[680px]  flex-col     rounded-[15px] shadow-shadow bg-[white] py-[45px] px-[32px] fixed left-[50%] top-[50%] translate-x-1/2 translate-y-1/2 z-50"
        >
          <div className="flex">
            <div className="title flex h-fit ">
              <img
                src="/assests/Notification.svg"
                className="w-[20px] ml-[5px]"
                alt=""
              />
              <h3 className="text-[21x] font-bold">إضافة إشعار جديد</h3>
            </div>
            <img
              onClick={() => props.setOpen(false)}
              src="/assests/cancle.svg"
              alt=""
              className="absolute cursor-pointer left-[37px] top-[37px]"
            />
          </div>
          <p className="mt-[35px] mb-[43px]">معلومات الإشعار</p>
          <div className="addAccount flex flex-col gap-[20px] px-[10px] overflow-y-auto">
            <form
              className="flex flex-col gap-[25px]"
              onSubmit={handelAddNotification}
              ref={addNotification}
            >
              {Notifcation.map((notif) => {
                return (
                  <Input
                    key={notif.id}
                    for={notif.label}
                    label={notif.label}
                    type={notif.type}
                    id={notif.label}
                    name={notif.name}
                  />
                );
              })}
              <div className="box-input">
                <label className="block w-fit mb-[12px] text-[21px] font-[500] text-black cursor-pointer">
                  موجهة إلى
                </label>
                <input
                  type="text"
                  className="w-full px-[14px] py-[10px] border-solid border-[1px] border-[#004556] text-input rounded-[15px] cursor-text overflow-y-auto focus:outline-none"
                  value={props.name}
                  readOnly
                />
              </div>
              <div className="flex mt-[35px] gap-[15px]">
                <button className=" text-[white] group w-full py-[14px] relative">
                  <span className="bg-main group-hover:scale-[1.02] transition duration-[0.2s] absolute left-0 top-0 w-full h-full rounded-[15px] z-[-1]"></span>
                  {loading ? <Loading /> : "اضافة إشعار "}
                </button>
                <MiniButton2 title="رجوع" setOpen={props.setOpen} />
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
