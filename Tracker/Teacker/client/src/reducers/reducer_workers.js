import {
  FETCHING_WORKERS,
  FETCHED_WORKERS,
  FETCHED_WORKERS_FAILURE,
  ADD_WORKER,
  EDIT_WORKER,
  DELETE_WORKER
} from "../constants";

const initialState = {
  data: null,
  isFetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_WORKERS:
      return {
        ...initialState,
        fetched: true
      };
    case FETCHED_WORKERS:
      return {
        ...initialState,
        data: action.payload,
        fetched: true
      };
    case FETCHED_WORKERS_FAILURE:
      return {
        ...initialState,
        error: action.payload,
        fetched: true
      };
    case ADD_WORKER:
      return {
        ...state,
        data: { ...state.data, [action.payload.key]: action.payload }
      };
    case EDIT_WORKER:
      return {
        ...state,
        data: state.data.map(worker => {
          if (worker.id === action.payload.id) {
            return action.payload.updatedPost;
          }
          return worker;
        })
      };
    default:
      return state;
  }
};
