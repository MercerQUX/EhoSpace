import { BrowserRouter, HashRouter } from "react-router-dom";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./main.module.css";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux-use";
import { isAuthInitialization } from "./store/reselectors/auth-selector";
import { initialzationApp } from "./helpers/initialzationHelper";
import { Routers } from "./routers/Routers";

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthInitialization);
  useEffect(() => {
    initialzationApp(dispatch);
  }, [dispatch]);
  return (
    <div className={style.wrapper}>
      <HashRouter>
        <Header />
        <Saidbar />
        <Routers isAuth={isAuth} />
      </HashRouter>
    </div>
  );
}

export default App;
