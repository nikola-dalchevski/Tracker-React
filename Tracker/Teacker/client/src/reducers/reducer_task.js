import {
  FETCHED_TASKS,
  FETCHING_TASKS_FAILURE,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK
} from "../constants";

const initialState = {
  data: null,
  isFetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TASKS:
      console.log(action.payload);
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};
