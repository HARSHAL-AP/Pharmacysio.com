import * as types from "./actionType";
import axios from "axios";

export const getProduct = (qparams) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/product/${qparams.category}`, {
      params: qparams.parmas,
    })
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

export const getMedicindata =
  (qparams, alphabet = "A") =>
  (dispatch) => {
    dispatch({ type: types.GET_MEDICINE_DATA_REQUEST });

    return axios
      .get(`${process.env.REACT_APP_APILINK}/drug/${alphabet}`, {
        params: qparams,
      })
      .then((r) => {
        dispatch({
          type: types.GET_MEDICINE_DATA_SUCCESS,
          payload: r.data,
        });
      })
      .then((e) => {
        dispatch({ type: types.GET_MEDICINE_DATA_FAILURE });
      });
  };

export const getFarmerpro = (qparams) => (dispatch) => {
  dispatch({ type: types.GET_FARMERPRO_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/farmerp`, { params: qparams })
    .then((r) => {
      dispatch({
        type: types.GET_FARMERPRO_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GET_FARMERPRO_DATA_FAILURE });
    });
};

export const getProductorders = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTORDER_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/productorder`, {
      headers: { authorization: JSON.parse(localStorage.getItem("token")) },
    })
    .then((r) => {
      dispatch({
        type: types.GET_PRODUCTORDER_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GET_PRODUCTORDER_DATA_FAILURE });
    });
};

export const getLabtestorders = () => (dispatch) => {
  dispatch({ type: types.GET_LABTESTORDER_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/labtestorder`)
    .then((r) => {
      dispatch({
        type: types.GET_LABTESTORDER_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GET_LABTESTORDER_DATA_FAILURE });
    });
};

export const getallusers = () => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/user/getall`)
    .then((r) => {
      dispatch({
        type: types.GET_USER_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GET_USER_DATA_FAILURE });
    });
};

export const getallAdmins = () => (dispatch) => {
  dispatch({ type: types.GET_ADMIN_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/admin/adminall`)
    .then((r) => {
      dispatch({
        type: types.GET_ADMIN_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GET_ADMIN_DATA_FAILURE });
    });
};

export const getallpord = () => (dispatch) => {
  dispatch({ type: types.GETALL_PRODUCT_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/product/getall`)
    .then((r) => {
      dispatch({
        type: types.GETALL_PRODUCT_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GETALL_PRODUCT_DATA_FAILURE });
    });
};

export const getallMedicindata = () => (dispatch) => {
  dispatch({ type: types.GETALL_MEDICINE_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/drug/getall`)
    .then((r) => {
      dispatch({
        type: types.GETALL_MEDICINE_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GETALL_MEDICINE_DATA_FAILURE });
    });
};

export const getallFarmerpro = () => (dispatch) => {
  dispatch({ type: types.GETALL_FARMERPRO_DATA_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_APILINK}/farmerp/getall`, {
      headers: { authorization: JSON.parse(localStorage.getItem("token")) },
    })
    .then((r) => {
      dispatch({
        type: types.GETALL_FARMERPRO_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .then((e) => {
      dispatch({ type: types.GETALL_FARMERPRO_DATA_FAILURE });
    });
};
