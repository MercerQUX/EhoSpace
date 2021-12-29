import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profileSlice";
import { authReducer } from "./reducers/authSlice";
import { dialogsReducer } from "./reducers/dialogsSlice";
import { userReducer } from "./reducers/userSlice";
import { newsReducer } from "./reducers/newsSlice";

const rootReducer = combineReducers({
  userReducer,
  dialogsReducer,
  profileReducer,
  authReducer,
  newsReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
