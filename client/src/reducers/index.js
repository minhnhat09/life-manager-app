import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";
import spendingReducer from "./spendingReducer";
import projectManagementReducer from "./projectManagementReducer";
export default combineReducers({
  auth: authReducer,
  books: bookReducer,
  spendings: spendingReducer,
  blogs: blogReducer,
  projects: projectManagementReducer
});
