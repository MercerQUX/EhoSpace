import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./main.module.css";
import Dialogs from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import UsersPage from "./components/User/UsersPage";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux-use";
import { useRedirect } from "./hooks/redirect-use";
import { isAuthInitialization } from "./store/reselectors/auth-selector";
import { Test } from "./services/DB/testing";
import { initializeAuthProfile } from "./store/thunks/authThunks";
import { initialzationApp } from "./helpers/initialzationHelper";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    initialzationApp(dispatch)
  }, []);
  const isAuth = useAppSelector(isAuthInitialization);
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Saidbar />
        <Routes>
          {useRedirect(isAuth, <Profile />, "/", "/login")}
          {useRedirect(isAuth, <Profile />, "/profile", "/login")}
          <Route path="/profile/:userID" element={<Profile />} />
          {useRedirect(isAuth, <Dialogs />, "/dialogs", "/login")}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Test />
      </div>
    </BrowserRouter>
  );
}

export default App;
