import { combineReducers } from "redux";
import SpendingReducer from "./SpendingReducer";
export default combineReducers({
  spendings: SpendingReducer
});
