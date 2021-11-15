import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./main.module.css";
import Dialogs from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import UsersContainer from "./components/User/UsersContainer";
import {HeaderContainerCompose} from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <HeaderContainerCompose />
        <Saidbar />
        <Route path="/" render={() => <Redirect to={"/profile"} />} />
        <Route path="/profile/:UserID?" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/login" render={() => <LoginContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
