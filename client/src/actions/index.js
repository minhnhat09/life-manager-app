import axios from "axios";
import { FETCH_USER, FETCH_SPENDINGS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSpendings = () => async dispatch => {
  const res = await axios.get("/api/spendings");
  dispatch({ type: FETCH_SPENDINGS, payload: res.data });
};

export const addSpending = spending => async dispatch => {
  const addSpending = await axios.post("/api/spendings", spending);
  const res = await axios.get("/api/spendings");
  dispatch({ type: FETCH_SPENDINGS, payload: res.data });
};
