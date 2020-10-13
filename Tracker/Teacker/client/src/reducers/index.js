import { combineReducers, applyMiddleware } from "redux";
import workers from "./reducer_workers";
import clients from "./reducer_clients";
import tasks from "./reducer_task";
import projects from "./reducer_projects";

export default combineReducers({
  workers,
  clients,
  tasks,
  projects
});
