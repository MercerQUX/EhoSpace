import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./components/CSS/main.module.css";
import Dialogs from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import UsersContainer from "./components/User/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Saidbar />
        <Route path="/profile" render={() => <Profile store={props.state} />} />
        <Route path="/dialogs" render={() => <Dialogs store={props.state} />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/contact" render={() => <Contact />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
