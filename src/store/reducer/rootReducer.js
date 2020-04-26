import { combineReducers } from "redux";
import authTypeReducer from "./authTypeReducer";
const rootReducer = combineReducers({ auth: authTypeReducer });
export default rootReducer;
