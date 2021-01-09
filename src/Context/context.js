import React from "react";

const MyContext = React.createContext({
  data: [],
  updataArr: (arr) => {}
});

export default MyContext;