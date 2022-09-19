import * as React from "react";
import Auth from "./Auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthSaga } from "../../redux/store/AuthReduser";

const AuthContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/animal/page/1";

  const [lookPassword, setLookPassword] = useState(false);
  const dispatch = useDispatch();

  const callBack = () => {
    navigate(`${fromPage}`);
  };
  const submit = (form) => {
    dispatch(setAuthSaga({ form, callBack }));
  };
  const hidePassword = (e) => {
    e.preventDefault();
    setLookPassword(!lookPassword);
  };

  return (
    <div>
      <Auth
        lookPassword={lookPassword}
        submit={submit}
        hidePassword={hidePassword}
      />
    </div>
  );
};

export default AuthContainer;
