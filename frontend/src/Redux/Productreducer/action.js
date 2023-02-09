import * as types from "./actionTypes";
import axios from "axios";




export const getProduct = (qparams) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_DATA_REQUEST });
 console.log(qparams)
  return axios
    .get(`${process.env.REACT_APP_APILINK}/product/data`,{params:qparams.parmas})
    .then((r) => {
      dispatch({
        type: types.GET_PRODUCT_DATA_SUCCESS,
        payload: r.data,
      });
      
    })
    .then((e) => {
      dispatch({ type: types.GET_PRODUCT_DATA_FAILURE });
    });
};
