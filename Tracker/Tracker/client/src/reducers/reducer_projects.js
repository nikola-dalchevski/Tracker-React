import {
  FETCHED_PROJECTS,
  FETCHED_PROJECTS_FAILURE,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT
} from "../constants";

const initialState = {
  data: null,
  isFetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PROJECTS:
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};
