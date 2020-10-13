const BASE_URL = "http://localhost:4001";

const API_ENDPOINTS = {
  GET: BASE_URL + "?sheet=",
  APPEND: BASE_URL + "/append",
  UPDATE: BASE_URL + "/update",
  CLEAR: BASE_URL + "/clear"
};

export default API_ENDPOINTS;
