import { configureStore, Tuple } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {thunk} from "redux-thunk";
import appApi from "./appApi";
import userSlice from "./userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

const customReducer = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfiguration = {
  key: "root",
  storage,
  blacklist: [appApi.reducerPath],
};
const myPersistReducer = persistReducer(persistConfiguration, customReducer);

const store = configureStore({
  reducer: myPersistReducer,
  middleware: () => new Tuple(thunk, appApi.middleware),
});

export default store;
