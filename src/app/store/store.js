import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducer/rootReducer";
import storage from "redux-persist/lib/storage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "authType",
  storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer, composeEnhancer);
const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
export default store;
