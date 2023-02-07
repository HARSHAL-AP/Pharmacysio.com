import * as types from "./actionType";
import axios from "axios";

const initialstate={
    isAuth: false,
    token: "",
    isAuthLoading: false,
    isAuthError: false,
    orders:[]
}



export const reducer=(oldState =initialstate, action)=>{
    const { type, payload } = action;
    switch (type) {
      case types.USER_LOGIN_REQUEST:
        return {
          ...oldState,
          isAuthLoading: true,
        };
      case types.USER_LOGIN_SUCCESS:
        return {
          ...oldState,
          isAuthLoading: false,
          token: payload,
          isAuth: true,
        };
      case types.USER_LOGIN_FAILURE:
        return {
          ...oldState,
          isAuthLoading: false,
          token: "",
          isAuth: false,
          isAuthError: true,
        };
  
      default:
        return oldState;
    }









}