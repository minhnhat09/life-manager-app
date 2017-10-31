import { FETCH_SPENDINGS } from "../actions/types";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPENDINGS:
      return action.payload;
    default:
      return state;
  }
}
