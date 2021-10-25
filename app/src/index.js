import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";
import { changeInputPost } from "./redux/store";

rerenderEntireTree(store, changeInputPost);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
