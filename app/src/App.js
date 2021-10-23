import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import style from "./components/CSS/main.module.css";

function App() {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <Saidbar className={style.saidbar} />
      <Profile className={style.profile} />
    </div>
  );
}

export default App;
