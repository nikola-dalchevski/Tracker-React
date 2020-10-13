import React from "react";
import classes from "./modal.module.css";
import Backdrop from "../backdrop/Backdrop";

const Modal = props => {
  return (
    <React.Fragment>
      <Backdrop backDropClicked={props.backdropClicked} />
      <div className={classes.Container}>{props.children}</div>
    </React.Fragment>
  );
};

export default Modal;
