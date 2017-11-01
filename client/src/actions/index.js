import axios from "axios";
import { FETCH_USER, FETCH_SPENDINGS, REMOVE_SPENDING } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteSpending = index => async dispatch => {
  const res = await axios.delete(`/api/spending/${index}`);
  if (res.status === 200) {
    dispatch({ type: REMOVE_SPENDING, payload: index });
  }
};

export const fetchSpendings = () => async dispatch => {
  const res = await axios.get("/api/spendings");
  dispatch({ type: FETCH_SPENDINGS, payload: res.data });
};

export const addSpending = spending => async dispatch => {
  const addSpending = await axios.post("/api/spending", spending);
  const res = await axios.get("/api/spendings");
  dispatch({ type: FETCH_SPENDINGS, payload: res.data });
};
