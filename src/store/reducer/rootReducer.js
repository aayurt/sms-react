import { combineReducers } from "redux";
import authTypeReducer from "./authTypeReducer";
const rootReducer = combineReducers({ authTypeReducer });
export default rootReducer;
