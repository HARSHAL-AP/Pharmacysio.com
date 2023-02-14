import * as types from "./actionTypes";
import axios from "axios";




export const getProduct = (qparams) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/product/${qparams.category}`,{params:qparams.parmas})
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


export const getLabtests = () => (dispatch) => {
  dispatch({ type: types.GET_LABTEST_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/labtests/data`)
    .then((r) => {
      dispatch({
        type: types.GET_LABTEST_DATA_SUCCESS,
        payload: r.data,
      });
      
    })
    .then((e) => {
      dispatch({ type: types.GET_LABTEST_DATA_FAILURE });
    });
};

export const getMedicindata=(qparams,alphabet="A")=>(dispatch)=>{
dispatch({type:types.GET_MEDICINE_DATA_REQUEST})

return axios
.get(`${process.env.REACT_APP_APILINK}/drug/${alphabet}`,{params:qparams})
.then((r) => {
  dispatch({
    type: types.GET_MEDICINE_DATA_SUCCESS,
    payload: r.data,
  });
  
})
.then((e) => {
  dispatch({ type: types.GET_MEDICINE_DATA_FAILURE});
});

}