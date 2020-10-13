import React from "react";
import { connect } from "react-redux";
import classes from "./addNew.module.css";
import {} from "../../../actions";

const ss = {};
class AddNew extends React.Component {
  makeState = this.props.data[this.props.type][0].map(item => {
    ss[item] = "";
  });

  state = {
    ...ss
  };

  render() {
    return (
      <div>
        <h2>ADD {this.props.type.toUpperCase()}</h2>
        {this.props.data[this.props.type][0].map(item => {
          return (
            <div>
              <label>{item}</label>
              <input></input>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AddNew;
