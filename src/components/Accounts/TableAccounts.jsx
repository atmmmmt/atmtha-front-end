import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { getIdCookie } from "../../utils/cockies";
import { GetUsers, DeleteUsers } from "../../redux/apiCalls/subscribersApiCall";
import { PER_PAGE } from "../../utils/arrays";
import PaginationCom from "../Pagination";
import Alert from "../Alert";
import Pop from "../Pop";
import AddnotificationToUser from "./AddnotificationToUser";
export default function TableAccounts() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [page, setPage] = useState(1);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const COLUMNS = [
    {
      Header: "",
      accessor: "nember",
      Cell: ({ row }) => {
        return <span className="pr-[25px]">{row.index + 1} - </span>;
      },
    },
    {
      Header: "بروفايل",
      accessor: "profilePhoto",
      Cell: ({ value }) => {
        return (
          <img
            className="w-[50px] h-[50px] rounded-full "
            src={value.url}
            alt=""
          />
        );
      },
    },
    {
      Header: "اسم المستخدم",
      accessor: "username",
    },
    {
      Header: "رقم الموبايل",
      accessor: "phoneNumber",
    },
    {
      Header: "تاريخ البدء",
      accessor: "createdAt",
      Cell: ({ value }) => {
        return format(new Date(value), "dd/MM/yyyy");
      },
    },

    {
      Header: "",
      accessor: "icons",
      Cell: ({ row }) => {
        return (
          <span className="flex justify-evenly pl-[30px]">
            <img
              src="/assests/deleteIcon.svg"
              alt=""
              data-type={row.original.id}
              className="w-[16px] cursor-pointer"
              onClick={(e) => {
                setDeleteId(e.target.getAttribute("data-type"));
                setOpen(true);
              }}
            />
            <img
              src="/assests/addNotification.svg"
              alt=""
              onClick={() => {
                setOpen2(true);
                setId(row.original.id);
                setName(row.original.username);
              }}
              className="w-[16px] cursor-pointer"
            />
          </span>
        );
      },
    },
  ];
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const countUsers = useSelector((state) => state.users.countUsers);
  const loading = useSelector((state) => state.users.loading);
  useEffect(() => {
    dispatch(GetUsers(page, PER_PAGE));
  }, [dispatch, page]);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => users, [users]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  const ClickDeleteUser = async (ID) => {
    const token = getIdCookie().token;
    dispatch(DeleteUsers(setOpen, ID, token));
  };
  return (
    <>
      <Alert
        open={open}
        setOpen={setOpen}
        title="حذف الدرس!"
        buttonTitle="تأكيد"
        id={deleteId}
        img="/assests/AlertDeleteSubject.svg"
        paragraph="هل أنت متأكد من حذف المادة ستحذف أيضا جميع الاسئلة والبيانات؟"
        onclick={() => ClickDeleteUser(deleteId)}
      />
      <AddnotificationToUser
        id={id}
        name={name}
        open={open2}
        setOpen={setOpen2}
      />
      <Pop open={open} setOpen={setOpen} />
      <Pop open={open2} setOpen={setOpen2} />
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup, index) => {
            if (headerGroup.headers && headerGroup.headers.length) {
              return (
                <>
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="px-[20px] "
                  >
                    {headerGroup.headers.map((column, index) => {
                      return index === headerGroup.headers.length - 1 ? (
                        <th
                          className="text-start py-[22px] bg-main  text-[white] font-normal rounded-[10px_0_0_10px]"
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ) : index === 0 ? (
                        <th
                          className="text-start rounded-[0px_10px_10px_0px] py-[22px] bg-main  text-[white] font-normal "
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ) : (
                        <th
                          className="text-start py-[22px] bg-main  text-[white] font-normal "
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      );
                    })}
                  </tr>

                  <tr style={{ height: "15px" }}></tr>
                </>
              );
            } else {
              return null;
            }
          })}
        </thead>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              if (row.cells && row.cells.length) {
                return (
                  <>
                    <tr {...row.getRowProps()} className="h-[60px] bg-[white]">
                      {row.cells.map((cell, index) => {
                        return index === row.cells.length - 1 ? (
                          <td
                            {...cell.getCellProps()}
                            className="text-start rounded-[10px_0_0_10px]"
                          >
                            {cell.render("Cell")}
                          </td>
                        ) : index === 0 ? (
                          <td
                            {...cell.getCellProps()}
                            className="text-start rounded-[0_10px_10px_0]"
                          >
                            {cell.render("Cell")}
                          </td>
                        ) : (
                          <td {...cell.getCellProps()} className="text-start">
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                    {index !== rows.length - 1 && (
                      <tr style={{ height: "15px" }}></tr>
                    )}
                  </>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        )}
      </table>
      <PaginationCom
        count={Math.ceil(countUsers / PER_PAGE)}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
