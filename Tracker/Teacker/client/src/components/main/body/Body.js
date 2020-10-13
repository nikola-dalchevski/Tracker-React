import React from "react";
import classes from "./body.module.css";
import {
  getWorkers,
  getClients,
  getTasks,
  getProjects
} from "../../../actions";
import { connect } from "react-redux";
import Table from "../table/Table";
import Loader from "../../common/loader/Loader";
import Modal from "../../common/modal/Modal";
import AddNew from "../../common/addNew/AddNew";

class Body extends React.Component {
  state = {
    addModal: false
  };
  componentDidMount() {
    // console.log(this.props.type);
    // switch (this.props.type) {
    //   case "workers":
    //     return this.props.getWorkers();
    //   case "clients":
    //     return this.props.getClients();
    //   case "tasks":
    //     return this.props.getTasks();
    //   case "projects":
    //     return this.props.getProjects();
    //   default:
    //     return null;
    // }
    this.props.getProjects();
    this.props.getTasks();
    this.props.getClients();
    this.props.getWorkers();
  }

  renderTableData = () => {
    console.log("renderData");
    return {
      workers: this.props.data.workers,
      clients: this.props.data.clients,
      tasks: this.props.data.tasks,
      projects: this.props.data.projects
    };
  };
  backdropCLicked = () => {
    this.setState({
      addModal: false
    });
  };
  addButtonCLicked = () => {
    this.setState({
      addModal: true
    });
  };

  renderModal = (type, data) => {
    console.log("RenderModal", data);
    if (this.state.addModal) {
      return (
        <Modal backdropClicked={() => this.backdropCLicked()}>
          <AddNew type={type} data={data} />
        </Modal>
      );
    } else {
      return null;
    }
  };

  render() {
    console.log("inner state", this.state);
    return (
      <div className={classes.Body}>
        {this.renderModal(this.props.type, this.props.data)}
        {this.props.data[this.props.type] ? (
          <Table
            data={this.renderTableData()[this.props.type]}
            type={this.props.type}
            addButtonCLicked={() => this.addButtonCLicked()}
          />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    data: {
      workers: state.workers.data,
      clients: state.clients.data,
      tasks: state.tasks.data,
      projects: state.projects.data
    }
  };
};

export default connect(mapStateToProps, {
  getWorkers,
  getClients,
  getTasks,
  getProjects
})(Body);
