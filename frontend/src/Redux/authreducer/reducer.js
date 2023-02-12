import * as types from "./actionType";
import axios from "axios";

const initialstate = {
  isAuth:JSON.parse(localStorage.getItem('isAuth'))|| false,
  token:JSON.parse(localStorage.getItem("token"))|| "",
  isAuthLoading: false,
  isAuthError: false,
  cart_item:JSON.parse(localStorage.getItem("cart_item"))|| [],
  labtest_item:JSON.parse(localStorage.getItem("labtest_item"))|| [],
  userdata:JSON.parse(localStorage.getItem("user"))|| {},
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
       localStorage.setItem("cart_item",JSON.stringify([...oldState.cart_item, ...payload.User.cartitem]));
       localStorage.setItem("labtest_item",JSON.stringify([...oldState.labtest_item, ...payload.User.labtest_items]))
       localStorage.setItem("user",JSON.stringify(payload.User));
      return {
        ...oldState,
        isAuthLoading: false,
        token: payload.token,
        isAuth: true,
        cart_item: [...oldState.cart_item, ...payload.User.cartitem],
        labtest_item: [...oldState.labtest_item, ...payload.User.labtest_items],
        userdata: payload.User,
      };
      
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        token: "",
        isAuth: false,
        isAuthError: true,
      };
  
    case types.ADD_CART_ITEM_SUCCESS:
      localStorage.setItem("cart_item",JSON.stringify([...oldState.cart_item, payload]));
      return {
        ...oldState,
        isAuthLoading: false,
        cart_item: [...oldState.cart_item, payload],
      };
      
   
    case types.DELET_CART_ITEM_SUCCESS:
      let cart=oldState.cart_item.filter((item) => item.id !== payload)
      localStorage.setItem("cart_item",JSON.stringify(cart));


      return {
        ...oldState,
        isAuthLoading: false,
        cart_item:cart ,
      };
  
   
    case types.UPDATE_CART_ITEM_SUCCESS:
      const update=oldState.cart_item.map(item=>{
        if(item.id==payload.id){
          return payload
        }
        return item
      })
      localStorage.setItem("cart_item",JSON.stringify(update));
      return {
        ...oldState,
        isAuthLoading: false,
        cart_item: update,
      };
    
    default:
      return oldState;
  }
};
