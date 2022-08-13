import React, { useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import "./PagesBar.css";
const theme = createMuiTheme();
const PagesBar = (props) => {
  const [offset, setOffset] = useState(0);

  function handleClick(offset) {
    props.onpage(offset + 1);
    setOffset(offset);
  }
  return (
    <div className="pb">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          className="pages"
          otherPageColor="black"
          offset={offset}
          currentPageColor="inherit"
          total={14}
          onClick={(e, offset) => handleClick(offset)}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default PagesBar;
