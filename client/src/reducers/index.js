import { combineReducers } from "redux";
import SpendingReducer from "./SpendingReducer";
import { reducer as reduxForm } from 'redux-form';
export default combineReducers({
  spendings: SpendingReducer,
  form: reduxForm
});

