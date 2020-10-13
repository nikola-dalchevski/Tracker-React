import React from "react";
import classes from "./main.module.css";

import Body from "./body/Body";
import Header from "./header/Header";

const Main = props => {
  console.log(props);
  return (
    <div className={classes.Main}>
      <Header
        type={props.type}
        showSidebar={props.sidebar}
        sidebarEvent={props.sidebarEvent}
      />
      <Body type={props.type} />
    </div>
  );
};

export default Main;
