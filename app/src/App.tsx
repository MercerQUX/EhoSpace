import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./main.module.css";
import Dialogs from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import UsersContainer from "./components/User/UsersContainer";
import { HeaderContainerCompose } from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/LoginContainer";
import {dialogsSlice} from "./store/reducers/dialogsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux-use";

function App() {
  const {addMessage} = dialogsSlice.actions; 
  const dispatch = useAppDispatch();
  return (
    // <BrowserRouter>
    //   <div className={style.wrapper}>
    //     <HeaderContainerCompose />
    //     <Saidbar />
    //     <Routes>
    //       {/* <Route path="/" element={<Profile />} /> */}
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="/dialogs" element={<Dialogs />} />
    //       <Route path="/users" element={<UsersContainer />} />
    //       <Route path="/news" element={<News />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/login" element={<LoginContainer />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div>

    </div>
  );
}

export default App;
