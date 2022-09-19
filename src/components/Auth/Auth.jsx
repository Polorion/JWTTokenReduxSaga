import * as React from "react";
import S from "./Auth.module.css";
import * as ReactDOM from "react-dom";
import { useState } from "react";

const Auth = (props) => {
  const [login, setLogin] = useState("test_user");
  const [password, setPassword] = useState("123456");
  const iLogin = (e) => {
    setLogin((pre) => e.target.value);
  };
  const iPassword = (e) => {
    setPassword((pre) => e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    login && props.submit(form);
  };
  const node = document.querySelector("#auth");
  const form = {
    login,
    password,
  };

  if (!node) {
    return;
  }

  return ReactDOM.createPortal(
    <div className={S.auth}>
      <div className={S.body}>
        <h2 className={S.title}> Login</h2>
        <form onSubmit={submit}>
          <input
            className={S.input}
            onInput={iLogin}
            value={login}
            type="text"
          />
          <input
            className={S.input}
            onInput={iPassword}
            value={password}
            type="password"
          />

          <button className={S.btn}>login</button>
          <button onClick={props.hidePassword} className={S.btn}>
            узнать логин и пароль=)
          </button>
          {props.lookPassword && (
            <div className={S.acc}>
              <div>user: test_user</div>
              <div> password:123456</div>
            </div>
          )}
        </form>
      </div>
    </div>,
    node
  );
};

export default Auth;
