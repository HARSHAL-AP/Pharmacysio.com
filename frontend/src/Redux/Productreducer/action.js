import * as types from "./actionTypes";
import axios from "axios";




export const getProduct = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_DATA_REQUEST });

  return axios
    .get(`https://average-lime-wildebeest.cyclic.app/product/data?`)
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
