import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"; 
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  pageProfile: ProfileReducer,
  pageDialogs: DialogsReducer,
  pageUsers: UsersReducer,
  authenticator: authReducer,
  form: formReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
