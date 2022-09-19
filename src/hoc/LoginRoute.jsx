import * as React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginRoute = ({ children }) => {
  const auth = useSelector((state) => state.Auth.isAuth);
  if (auth) {
    return <Navigate to={"/animal/page/1"} />;
  }
  return <div>{children}</div>;
};

export default LoginRoute;
