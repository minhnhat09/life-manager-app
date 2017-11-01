import {
  FETCH_SPENDINGS,
  ADD_SPENDING,
  REMOVE_SPENDING
} from "../actions/types";
export default function(state = [], action) {
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
}
