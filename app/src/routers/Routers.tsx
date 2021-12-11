import { Navigate, Route, Routes } from "react-router";
import { dataListRouter } from "./router-list";

export const Routers: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  return (
    <Routes>
      {dataListRouter.map((route) => {
        if (route.redirect) {
          if (!isAuth) {
            return (
              <Route
                path={route.path}
                element={<Navigate to={route.redirectPath} />}
              />
            );
          } else {
            return <Route path={route.path} element={<route.JSX />} />;
          }
        } else {
          return <Route path={route.path} element={<route.JSX />} />;
        }
      })}
    </Routes>
  );
};

// export const Routers: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
//   return (
//     <Routes>
//       {dataListRouter.map((route) => {
//         console.log(<Route path={route.path} element={<route.JSX />} />);
//         //@ts-ignore
//         console.log(route);
//         return <Route path={route.path} element={<route.JSX/>} />;
//       })}
//     </Routes>
//   );
// };
