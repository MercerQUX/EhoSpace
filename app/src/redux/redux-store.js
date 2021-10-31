import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  pageProfile: ProfileReducer,
  pageDialogs: DialogsReducer,
  pageUsers: UsersReducer,
  authenticator: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;
