import axios from "axios";
import API_ENDPOINTS from "./endpoints";
import {
  FETCHED_WORKERS,
  FETCHING_WORKERS,
  FETCHED_WORKERS_FAILURE,
  ADD_WORKER,
  EDIT_WORKER,
  DELETE_WORKER,
  FETCHED_CLIENTS,
  FETCHING_CLIENTS,
  FETCHED_CLIENTS_FAILURE,
  FETCHED_TASKS,
  FETCHING_TASKS_FAILURE,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCHED_PROJECTS,
  FETCHED_PROJECTS_FAILURE,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT
} from "../constants";
import { bindActionCreators } from "redux";

export const getWorkers = sheetName => dispatch => {
  dispatch({
    type: FETCHING_WORKERS
  });
  axios
    .get(API_ENDPOINTS.GET + "Workers")
    .then(res => {
      dispatch({
        type: FETCHED_WORKERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCHED_WORKERS_FAILURE,
        payload: err
      });
    });
};

export const addWorker = data => dispatch => {
  axios
    .post(API_ENDPOINTS.APPEND, { Sheet: "Workers", Row: 1, data })
    .then(res => {
      dispatch({});
    });
};

export const getClients = data => dispatch => {
  dispatch({
    type: FETCHING_CLIENTS
  });
  axios
    .get(API_ENDPOINTS.GET + "Clients")
    .then(res => {
      console.log("res", res);
      dispatch({
        type: FETCHED_CLIENTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCHED_CLIENTS_FAILURE,
        payload: err
      });
    });
};

export const getTasks = () => dispatch => {
  axios
    .get(API_ENDPOINTS.GET + "Tasks")
    .then(res => {
      dispatch({
        type: FETCHED_TASKS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_TASKS_FAILURE,
        payload: err
      });
    });
};

export const getProjects = () => dispatch => {
  axios
    .get(API_ENDPOINTS.GET + "Projects")
    .then(res => {
      console.log("resss", res);
      dispatch({
        type: FETCHED_PROJECTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCHED_PROJECTS_FAILURE,
        data: err
      });
    });
};
