import React from "react";
import PaginationCom from "../components/Pagination";
import { TableCodes } from "../components/Codes/TableCodes";

export default function Codes() {
    return (
        <div>
            <TableCodes />
            <PaginationCom />
        </div>
    );
}
