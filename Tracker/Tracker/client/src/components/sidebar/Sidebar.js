import React from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

const Sidebar = props => {
  let style = {};
  if (props.close) {
    style.width = "0px";
  }
  return (
    <div className={classes.Sidebar} style={style}>
      <div className={classes.Title}>
        <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
        <span>PERSONAL TRACKER</span>
      </div>
      <div className={classes.NavLinks}>
        {props.options.listLinks.map((item, index) => {
          return (
            <NavLink
              className={classes.NavLink}
              activeClassName={classes.active}
              exact
              to={"/" + item}
              key={item}
            >
              <FontAwesomeIcon
                className={classes.Icon}
                icon={props.options.listIcons[index]}
                size="2x"
              />
              <span>{item.toUpperCase()}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
