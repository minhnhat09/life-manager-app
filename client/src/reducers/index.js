import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";
import spendingReducer from "./spendingReducer";
export default combineReducers({
  auth: authReducer,
  books: bookReducer,
  spendings: spendingReducer
});
