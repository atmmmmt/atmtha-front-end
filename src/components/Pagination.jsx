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

const PaginationCom = ({ setPage, page, count }) => {
  const handleChange = (_event, value) => {
    setPage(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center w-full py-[25px]">
        <Pagination
          shape="rounded"
          variant="outlined"
          color="primary"
          dir="ltr"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default PaginationCom;
