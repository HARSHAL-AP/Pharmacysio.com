import * as types from "./actionType";

const initialState = {
  products: [],
  labtest: [],
  medicine: [],
  farmerp: [],
  users: [],
  admins: [],
  Productorders: [],
  labtestorders: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_PRODUCT_DATA_SUCCESS:
      return { ...state, isLoading: false, products: payload };

    case types.GET_PRODUCT_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_LABTEST_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_LABTEST_DATA_SUCCESS:
      return { ...state, isLoading: false, labtest: payload };

    case types.GET_LABTEST_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_MEDICINE_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_MEDICINE_DATA_SUCCESS:
      return { ...state, isLoading: false, medicine: payload };

    case types.GET_MEDICINE_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_FARMERPRO_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_FARMERPRO_DATA_SUCCESS:
      return { ...state, isLoading: false, farmerp: payload };

    case types.GET_FARMERPRO_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_PRODUCTORDER_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_PRODUCTORDER_DATA_SUCCESS:
      return { ...state, isLoading: false, Productorders: payload };

    case types.GET_PRODUCTORDER_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_LABTESTORDER_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_LABTESTORDER_DATA_SUCCESS:
      return { ...state, isLoading: false, labtestorders: payload };

    case types.GET_LABTESTORDER_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_USER_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_USER_DATA_SUCCESS:
      return { ...state, isLoading: false, users: payload };

    case types.GET_USER_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.GET_ADMIN_DATA_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_ADMIN_DATA_SUCCESS:
      return { ...state, isLoading: false, admins: payload };

    case types.GET_ADMIN_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
