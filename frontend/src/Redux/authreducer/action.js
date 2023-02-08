import * as types from "./actionType";
import axios from "axios";

export const loginuser = (data) => (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_REQUEST,
  });
  return axios
    .post(`https://average-lime-wildebeest.cyclic.app/user/login`, data)
    .then((r) => {
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
