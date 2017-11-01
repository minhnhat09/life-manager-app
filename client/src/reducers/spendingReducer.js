import { FETCH_SPENDINGS, REMOVE_SPENDING } from "../actions/types";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPENDINGS:
      return action.payload;
    case REMOVE_SPENDING:
      return state.filter((spending, i) => spending._id !== action.payload);
    default:
      return state;
  }
}
