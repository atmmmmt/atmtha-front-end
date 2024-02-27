import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { GetCodes } from "../../redux/apiCalls/subscribersApiCall";
import Alert from "../Alert";
import { format } from "date-fns";
import Pop from "../Pop";
import PaginationCom from "../Pagination";
import { PER_PAGE } from "../../utils/arrays";

export const TablePackages = () => {
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const [page, setPage] = useState(1);

    const COLUMNS = [
        {
            Header: "",
            accessor: "nember",
            Cell: ({ row }) => {
                return <span className="pr-[25px]">{row.index + 1} - </span>;
            },
        },
        {
            Header: "كود الباقة",
            accessor: "codeNumber",
        },
        {
            Header: "الحالة",
            accessor: "id",
        },
        {
            Header: "اسم صاحب الباقة",
            accessor: "name",
            Cell: () => {
                return <span className="">Abd</span>;
            },
        },
        {
            Header: "تاريخ الصلاحية",
            accessor: "expirationDate",
        },
        {
            Header: "تاريخ البدء",
            accessor: "createdAt",
            Cell: ({ value }) => {
                return format(new Date(value), "dd/MM/yyyy");
            },
        },
        {
            Header: "تاريخ الانتهاء",
            accessor: "updatedAt",
            Cell: ({ value }) => {
                return format(new Date(value), "dd/MM/yyyy");
            },
        },
        {
            Header: "حالة الباقة",
            accessor: "status",
            Cell: ({ value }) => {
                return value === "notOk" ? (
                    <span className="text-[#8C8C8C]">غير مفعل</span>
                ) : (
                    <span>مفعل</span>
                );
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
                            src="/assests/download.svg"
                            alt=""
                            className="w-[16px] cursor-pointer"
                        />
                    </span>
                );
            },
        },
    ];
    useEffect(() => {
        console.log(deleteId);
    }, [deleteId]);
    const dispatch = useDispatch();
    const codes = useSelector((state) => state.users.codes);
    const loading = useSelector((state) => state.users.loading);
    const countCodes = useSelector((state) => state.users.countCodes);

    useEffect(() => {
        dispatch(GetCodes(page, PER_PAGE));
    }, [dispatch, page]);

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => codes, [codes]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns,
                data,
            },
            useSortBy
        );

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
            />
            <Pop open={open} setOpen={setOpen} />
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
                                        {headerGroup.headers.map(
                                            (column, index) => {
                                                return index ===
                                                    headerGroup.headers.length -
                                                        1 ? (
                                                    <th
                                                        className="text-start py-[22px] bg-main  text-[white] font-normal rounded-[10px_0_0_10px]"
                                                        {...column.getHeaderProps()}
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                    </th>
                                                ) : index === 0 ? (
                                                    <th
                                                        className="text-start rounded-[0px_10px_10px_0px] py-[22px] bg-main  text-[white] font-normal "
                                                        {...column.getHeaderProps()}
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                    </th>
                                                ) : (
                                                    <th
                                                        className="text-start py-[22px] bg-main  text-[white] font-normal "
                                                        {...column.getHeaderProps()}
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                    </th>
                                                );
                                            }
                                        )}
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
                                        <tr
                                            {...row.getRowProps()}
                                            className="h-[60px] bg-[white]"
                                        >
                                            {row.cells.map((cell, index) => {
                                                return index ===
                                                    row.cells.length - 1 ? (
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
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className="text-start"
                                                    >
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
                count={Math.ceil(countCodes / PER_PAGE)}
                page={page}
                setPage={setPage}
            />
        </>
    );
};
