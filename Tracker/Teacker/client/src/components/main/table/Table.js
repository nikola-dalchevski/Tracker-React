import React from "react";
import classes from "./table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Table = props => {
  console.log("DATA", props.data);
  let projectIndex;
  return (
    <table className={classes.Table}>
      <caption>
        ALL {props.type.toUpperCase()}{" "}
        <span onClick={props.addButtonCLicked}>+</span>
      </caption>
      {props.data.map((item, index) => {
        if (item === "project") {
          projectIndex = index;
        }
        if (index === 0) {
          return (
            <tr>
              {item.map(value => {
                return <th>{value}</th>;
              })}
            </tr>
          );
        } else {
          return (
            <tr>
              {item.map(value => {
                return <td>{value}</td>;
              })}
              <td>
                <FontAwesomeIcon className={classes.Edit} icon={faEdit} />
              </td>
            </tr>
          );
        }
      })}
    </table>
  );
};

export default Table;
