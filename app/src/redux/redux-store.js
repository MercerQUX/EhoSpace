import { createStore, combineReducers } from "redux";
import authReducer from "./auth-reducer";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";

const reducers = combineReducers({
  pageProfile: ProfileReducer,
  pageDialogs: DialogsReducer,
  pageUsers: UsersReducer,
  authenticator: authReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;
