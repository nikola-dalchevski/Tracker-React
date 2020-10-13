import {
  FETCHED_CLIENTS,
  FETCHED_CLIENTS_FAILURE,
  FETCHING_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT
} from "../constants";

const initialState = {
  data: null,
  isFetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CLIENTS:
      return {
        ...initialState,
        isFetching: true
      };
    case FETCHED_CLIENTS:
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};
