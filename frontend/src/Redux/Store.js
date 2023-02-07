import { legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose, } from "redux";
import thunk from "redux-thunk";
import {reducer as Productreducer} from "./Productreducer/reducer"
import {reducer as Authreducer } from "./authreducer/reducer"
const rootReducer = combineReducers({ Productreducer, Authreducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export { store };
