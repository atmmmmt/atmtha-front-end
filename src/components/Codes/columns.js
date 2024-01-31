export const COLUMNS = [
    {
        Header: "",
        accessor: "nember",
        Cell: ({ row }) => {
            return <span className="pr-[25px]">{row.index + 1} - </span>;
        },
    },

    {
        Header: "رقم الكود",
        accessor: "id",
    },
    {
        Header: "الحالة",
        accessor: "stuts",
    },
    {
        Header: "اسم صاحب الكود",
        accessor: "name",
    },
    {
        Header: "تاريخ الصلاحية",
        accessor: "date",
    },
    {
        Header: "تاريخ البدء",
        accessor: "dateStarting",
    },
    {
        Header: "تاريخ الانتهاء",
        accessor: "dateEnding",
    },
    {
        Header: "حالة الكود",
        accessor: "stutsCode",
    },
    {
        Header: "",
        accessor: "icons",
        Cell: () => {
            return (
                <span className="flex justify-evenly pl-[30px]">
                    <img
                        src="/assests/deleteIcon.svg"
                        alt=""
                        className="w-[16px] cursor-pointer"
                    />
                    <img
                        src="/assests/download.svg"
                        alt=""
                        className="w-[16px]  cursor-pointer"
                    />
                </span>
            );
        },
    },
];
