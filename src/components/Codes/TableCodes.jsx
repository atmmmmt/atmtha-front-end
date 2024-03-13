import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCode,
  GetCodes,
  DownlaodQR,
} from "../../redux/apiCalls/subscribersApiCall";
import Loading from "../../components/Loading";

import { format } from "date-fns";

import Alert from "../Alert";
import Pop from "../Pop";
import AlertDownload from "../Download/AlertDownload";
import PopDownload from "../Download/PopDownload";
import PaginationCom from "../Pagination";
import { PER_PAGE } from "../../utils/arrays";

export const TableCodes = () => {
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [codeNumber, setCodeNumber] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const codes = useSelector((state) => state.users.codes);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(GetCodes(page, PER_PAGE)).then((re) => {
      setCount(Math.ceil(re?.documentCount / PER_PAGE));
    });
  }, [dispatch, page]);
  const ClickDeleteCode = async (deleteId) => {
    dispatch(DeleteCode(setOpen, deleteId)).then(() => {
      dispatch(GetCodes(page, PER_PAGE)).then((re) => {
        setCount(Math.ceil(re?.documentCount / PER_PAGE));
      });
    });
  };
  const ClickDownloadQR = async (codeNumber) => {
    dispatch(DownlaodQR(setDownload, codeNumber));
  };
  return (
    <>
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف الكود !"
        buttonTitle="تأكيد"
        id={deleteId}
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف الكود ؟"
        onclick={() => ClickDeleteCode(deleteId)}
      />
      <Pop open={open} setOpen={setOpen} />
      <AlertDownload
        download={download}
        setDownload={setDownload}
        title="تحميل الكود !"
        buttonTitle="تأكيد"
        id={deleteId}
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت تريد تحميل الكود ؟"
        onclick={() => ClickDownloadQR(codeNumber)}
      />
      <PopDownload download={download} setDownload={setDownload} />
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loading color="#004556" size="24" />
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <table className="w-full">
            <thead className="bg-main ">
              <tr className="px-[20px]">
                <th className="text-start py-[22px] bg-main  text-[white] font-normal rounded-[0px_10px_10px_0px]"></th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  كود الباقة
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  الحالة
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  تاريخ الصلاحية
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  تاريخ البدء
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  تاريخ الانتهاء
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal">
                  حالة الباقة
                </th>
                <th className="text-start py-[22px] bg-main  text-[white] font-normal rounded-[10px_0_0_10px]"></th>
              </tr>
            </thead>
            <div className="h-[10px]"></div>
            <tbody>
              {codes?.map((code, index) => {
                return (
                  <>
                    <tr className="bg-[white]">
                      <td className="text-start py-[22px] px-[10px] rounded-[0px_10px_10px_0px]">
                        {index + 1}.
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {code?.codeNumber}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {code?.allName ? code?.allName : code?.subjectName}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {code?.expirationDate ? code.expirationDate : "N/A"}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {code?.createdAt
                          ? format(new Date(code.createdAt), "dd/MM/yyyy")
                          : "N/A"}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {code?.updatedAt
                          ? format(new Date(code.updatedAt), "dd/MM/yyyy")
                          : "N/A"}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        {code?.status === "notOk" ? "غير مفعل" : "مفعل"}
                      </td>
                      <td className="text-start py-[22px] rounded-[10px_0_0_10px]">
                        <span className="flex items-center justify-evenly pl-[30px]">
                          <img
                            src="/assests/deleteIcon.svg"
                            alt=""
                            className="w-[16px] cursor-pointer"
                            onClick={(e) => {
                              setDeleteId(code._id);
                              setOpen(true);
                            }}
                          />
                          <img
                            src="/assests/download.svg"
                            alt=""
                            className="w-[16px] cursor-pointer"
                            onClick={() => {
                              setCodeNumber(code.codeNumber);
                              setDownload(true);
                            }}
                          />
                        </span>
                      </td>
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
};
