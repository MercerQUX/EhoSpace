import { JSXElementConstructor } from "react";
import { Navigate, Route } from "react-router-dom";

export const useRedirect = (
  isAuth: boolean,
  Component: JSX.Element | JSXElementConstructor<{}>,
  pathRoute:string,
  pathRedirect:string
) => {
  let newComponent;
  if (isAuth) {
    newComponent = Component;
  } else {
    newComponent = <Navigate to={pathRedirect} />
  }
  // @ts-ignore
  return <Route path={pathRoute} element={newComponent} />;
};
