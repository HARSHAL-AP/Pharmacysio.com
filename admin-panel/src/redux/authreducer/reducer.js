import * as types from "./actionType";
import axios from "axios";

const initialstate = {
  isAuth:JSON.parse(localStorage.getItem('isAuth'))|| false,
  token:JSON.parse(localStorage.getItem("token"))|| "",
  isAuthLoading: false,
  isAuthError: false,
  admindata:JSON.parse(localStorage.getItem("admin"))|| {},
};

export const reducer = (oldState = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
       localStorage.setItem("isAuth",JSON.stringify(true));
       localStorage.setItem("token",JSON.stringify(payload.token));
       
       localStorage.setItem("admin",JSON.stringify(payload.User));
      return {
        ...oldState,
        isAuthLoading: false,
        token: payload.token,
        isAuth: true,
        cart_item: [...oldState.cart_item, ...payload.User.cartitem],
        labtest_item: [...oldState.labtest_item, ...payload.User.labtest_items],
        admindata: payload.User,
      };
      
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        token: "",
        isAuth: false,
        isAuthError: true,
      };
  
    
      case types.LOGOUT:
        localStorage.setItem("isAuth",JSON.stringify(false));
        localStorage.setItem("token",JSON.stringify(""));
        
        localStorage.setItem("admin",JSON.stringify({}));
        
        return {
          ...oldState,
          isAuthLoading: false,
          isAuth:false,
          token:"",
          userdata:{},
          
        };
      
    default:
      return oldState;
  }
};