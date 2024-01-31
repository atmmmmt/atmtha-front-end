import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { getCodes } from "../../redux/slices/subscribersSlice";
export const TableCodes = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    console.log(getCodes());
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
                                        <tr style={{ height: "15px" }}></tr> // Add an empty row with desired height (20px in this case)
                                    )}
                                </>
                            );
                        } else {
                            return null;
                        }
                    })}
                </tbody>
            </table>
        </>
    );
};
