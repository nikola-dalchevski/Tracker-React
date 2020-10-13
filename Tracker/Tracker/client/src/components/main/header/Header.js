import React from "react";
import classes from "./header.module.css";
import RightMenu from "./rightMenu/RightMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  console.log("header", props);
  return (
    <div className={classes.Header}>
      <div>
        <span className={classes.LeftItems}>
          {!props.showSidebar.sidebar || props.showSidebar.force ? (
            <FontAwesomeIcon
              className={classes.Icon}
              icon={!props.showSidebar.force ? faBars : faTimes}
              size="1x"
              onClick={() => props.sidebarEvent()}
            />
          ) : null}
          {props.type}
        </span>
      </div>

      <RightMenu />
    </div>
  );
};

export default Header;
