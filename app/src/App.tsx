import { BrowserRouter, HashRouter } from "react-router-dom";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./main.module.sass";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux-use";
import { stateAuthIsInitialization } from "./store/reselectors/auth-selector";
import { initialzationApp } from "./helpers/initialzationHelper";
import { Routers } from "./routers/Routers";

function App() {
  const { dispatch, isAuth } = {
    dispatch: useAppDispatch(),
    isAuth: useAppSelector(stateAuthIsInitialization),
  };
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
