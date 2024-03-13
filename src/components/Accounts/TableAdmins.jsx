import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import {
  GetAdmins,
  DeleteAdmins,
} from "../../redux/apiCalls/subscribersApiCall";
import { getIdCookie } from "../../utils/cockies";
import { PER_PAGE } from "../../utils/arrays";
import Alert from "../Alert";
import AddnotificationToUser from "./AddnotificationToUser";
import Pop from "../Pop";
import PaginationCom from "../Pagination";
import Loading from "../../components/Loading";

export default function TableAdmins() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.users.admins);
  const loading = useSelector((state) => state.users.loading);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(GetAdmins(page, PER_PAGE)).then((re) => {
      setCount(Math.ceil(re?.documentCount / PER_PAGE));
    });
  }, [dispatch, page]);
  const ClickDeleteAdmin = async (deleteId) => {
    const token = getIdCookie().token;
    dispatch(DeleteAdmins(setOpen, deleteId, token));
  };
  return (
    <>
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف الأدمن!"
        buttonTitle="تأكيد"
        id={deleteId}
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف الأدمن ؟"
        onclick={() => ClickDeleteAdmin(deleteId)}
      />
      <AddnotificationToUser
        id={id}
        name={name}
        open={open2}
        setOpen={setOpen2}
      />
      <Pop open={open} setOpen={setOpen} />
      <Pop open={open2} setOpen={setOpen2} />
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loading color="#004556" size="24" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <table className="w-full">
            <thead className="bg-main ">
              <tr className="px-[20px]">
                <th className="text-start py-[22px] bg-main  text-[white] font-normal rounded-[0px_10px_10px_0px]"></th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  بروفايل
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  اسم الأدمن
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  رقم الموبايل
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  الإيميل
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  الدور
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  حالة الحساب
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  تاريخ الإضافة
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal rounded-[10px_0_0_10px]"></th>
              </tr>
            </thead>
            <div className="h-[10px]"></div>
            <tbody>
              {admins?.map((user, index) => {
                return (
                  <>
                    <tr className="bg-[white]">
                      <td className="text-start py-[22px] px-[10px] rounded-[0px_10px_10px_0px]">
                        {index + 1}.
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        <img
                          className="w-[35px] h-[35px] rounded-full"
                          src={user?.profilePhoto?.url}
                          alt=""
                        />
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {user?.username}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {user?.phoneNumber}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {user?.email}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {user?.role}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {user?.isVerified === false ? "غير مفعل" : "مفعل"}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {user?.createdAt
                          ? format(new Date(user.createdAt), "dd/MM/yyyy")
                          : "N/A"}
                      </td>
                      {getIdCookie().role === "superAdmin" ? (
                        <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                          <span className="flex items-center justify-evenly pl-[30px]">
                            {getIdCookie()._id !== user._id ? (
                              <>
                                <img
                                  src="/assests/deleteIcon.svg"
                                  alt=""
                                  className="w-[16px] cursor-pointer"
                                  onClick={(e) => {
                                    setDeleteId(user?._id);
                                    setOpen(true);
                                  }}
                                />
                                <img
                                  src="/assests/addNotification.svg"
                                  alt=""
                                  onClick={() => {
                                    setOpen2(true);
                                    setId(user?._id);
                                    setName(user?.username);
                                  }}
                                  className="w-[16px] cursor-pointer"
                                />
                              </>
                            ) : null}
                          </span>
                        </td>
                      ) : null}
                    </tr>
                    <tr className="h-[10px]"></tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <PaginationCom page={page} setPage={setPage} count={count} />
        </div>
      )}
    </>
  );
}
