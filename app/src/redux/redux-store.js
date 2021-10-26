import { createStore, combineReducers } from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";

const reducers = combineReducers({
  pageProfile: ProfileReducer,
  pageDialogs: DialogsReducer,
});

let store = createStore(reducers);

export default store;
