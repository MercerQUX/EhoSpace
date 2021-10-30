import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./components/CSS/main.module.css";
import Dialogs from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import UsersContainer from "./components/User/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <HeaderContainer />
        <Saidbar />
        <Route path="/profile/:UserID?" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/contact" render={() => <Contact />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
