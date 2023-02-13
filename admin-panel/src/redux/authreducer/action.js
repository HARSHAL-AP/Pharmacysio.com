import * as types from "./actionType";
import axios from "axios";

export const loginuser = (data) => (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_REQUEST,
  });
  return axios
    .post(`${process.env.REACT_APP_APILINK}/admin/login`, data)
    .then((r) => {
      console.log(r.data);
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: types.USER_LOGIN_FAILURE,
      });
    });
};

