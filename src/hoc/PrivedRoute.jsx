import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivedRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.Auth.isAuth);
  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return <div>{children}</div>;
};

export default PrivedRoute;
