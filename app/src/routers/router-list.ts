import Login from "../components/Auth/Login";
import Contact from "../components/Contact/Contact";
import Dialogs from "../components/Dialogs/Dialog";
import News from "../components/News/News";
import Profile from "../components/Profile/Profile";
import UsersPage from "../components/User/UsersPage";

interface IDataList {
  key: number;
  redirect: boolean;
  redirectPath: string;
  path: string;
  JSX: React.FC<any>;
}

export const dataListRouter: Array<IDataList> = [
  {
    key: 1,
    redirect: true,
    redirectPath: "/login",
    path: "/",
    JSX: Profile,
  },
  {
    key: 2,
    redirect: true,
    redirectPath: "/login",
    path: "/profile",
    JSX: Profile,
  },
  {
    key: 3,
    redirect: false,
    redirectPath: "",
    path: "/profile/:userID",
    JSX: Profile,
  },
  {
    key: 4,
    redirect: true,
    redirectPath: "/login",
    path: "/dialogs",
    JSX: Dialogs,
  },
  {
    key: 5,
    redirect: false,
    redirectPath: "",
    path: "/dialogs",
    JSX: Dialogs,
  },
  {
    key: 6,
    redirect: false,
    redirectPath: "",
    path: "/dialogs/:userID",
    JSX: Dialogs,
  },
  {
    key: 7,
    redirect: false,
    redirectPath: "",
    path: "/users",
    JSX: UsersPage,
  },
  {
    key: 8,
    redirect: false,
    redirectPath: "",
    path: "/contact",
    JSX: Contact,
  },
  {
    key: 9,
    redirect: false,
    redirectPath: "",
    path: "/news",
    JSX: News,
  },
  {
    key: 10,
    redirect: false,
    redirectPath: "",
    path: "/login",
    JSX: Login,
  },
  // {
  //   key:11,
  //   redirect: false,redirectPath: "",
  //   path: "",
  //   JSX: <div></div>,
  // },
];
