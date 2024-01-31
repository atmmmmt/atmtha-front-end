import React from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            main: "#00B0DC",
        },
        text: {
            primary: "#004556",
        },
    },
});
const PaginationCom = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex justify-center w-full mt-[60px]">
                <Pagination
                    count={12}
                    shape="rounded"
                    variant="outlined"
                    color="primary"
                    dir="ltr"
                />
            </div>
        </ThemeProvider>
    );
};

export default PaginationCom;
