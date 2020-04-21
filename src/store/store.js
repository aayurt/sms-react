import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducer/rootReducer";
import storage from "redux-persist/lib/storage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["authType"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer, composeEnhancer);
const store = createStore(pReducer);
export const persistor = persistStore(store);
export default store;
