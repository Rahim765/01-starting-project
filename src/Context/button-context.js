import React from "react";

const ButtonContext = React.createContext({
  setPage: () => {},
  page: 0,
});

export default ButtonContext;
