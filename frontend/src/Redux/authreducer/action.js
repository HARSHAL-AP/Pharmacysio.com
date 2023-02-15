import * as types from "./actionType";
import axios from "axios";

export const loginuser = (data) => (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_REQUEST,
  });
  return axios
    .post(`${process.env.REACT_APP_APILINK}/user/login`, data)
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

export const addtocart = (item) => (dispatch) => {

      dispatch({
        type: types.ADD_CART_ITEM_SUCCESS,
        payload: item,
      })
   
};

export const deletocart = (id) => (dispatch) => {
 
  
      dispatch({
        type: types.DELET_CART_ITEM_SUCCESS,
        payload: id,
      });
    
    
};


export const updatetocart = (item) => (dispatch) => {
  
      dispatch({
        type: types.UPDATE_CART_ITEM_SUCCESS,
        payload:item,
      });

};

export const logOut=()=>(dispatch)=>{
  dispatch({
    type: types.LOGOUT,
    
  });

}