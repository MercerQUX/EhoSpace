import Login from "../components/Auth/Login";
import Contact from "../components/Contact/Contact";
import Dialogs from "../components/Dialogs/Dialog";
import News from "../components/News/News";
import Profile from "../components/Profile/Profile";
import UsersPage from "../components/User/UsersPage";

interface IDataList {
  redirect: boolean;
  redirectPath: string;
  path: string;
  JSX: React.FC<any>;
}

export const dataListRouter: Array<IDataList> = [
  {
    redirect: true,
    redirectPath: "/login",
    path: "/",
    JSX: Profile,
  },
  {
    redirect: true,
    redirectPath: "/login",
    path: "/profile",
    JSX: Profile,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/profile/:userID",
    JSX: Profile,
  },
  {
    redirect: true,
    redirectPath: "/login",
    path: "/dialogs",
    JSX: Dialogs,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/dialogs",
    JSX: Dialogs,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/dialogs/:userID",
    JSX: Dialogs,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/users",
    JSX: UsersPage,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/contact",
    JSX: Contact,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/news",
    JSX: News,
  },
  {
    redirect: false,
    redirectPath: "",
    path: "/login",
    JSX: Login,
  },
  // {
  //   redirect: false,redirectPath: "",
  //   path: "",
  //   JSX: <div></div>,
  // },
];
