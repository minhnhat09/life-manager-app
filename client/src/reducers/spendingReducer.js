import {
  FETCH_SPENDINGS,
  ADD_SPENDING,
  REMOVE_SPENDING,
  LOADING_SPENDING
} from "../actions/types";
import { combineReducers } from "redux";

export const listSpendings = (state = [], action) => {
  switch (action.type) {
    case FETCH_SPENDINGS:
      return action.payload;
    case ADD_SPENDING:
      return [...state, action.payload];
    case REMOVE_SPENDING:
      return state.filter((spending, i) => spending._id !== action.payload);
    default:
      return state;
  }
};
export const loadingSpending = (state = false, action) => {
  switch (action.type) {
    case LOADING_SPENDING:
      return true;
    case FETCH_SPENDINGS:
      return false;
    default:
      return state;
  }
};
export default combineReducers({
  loadingSpending,
  listSpendings
});
