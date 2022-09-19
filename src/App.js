import React from "react";

import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import { GET_ANIMAL_SAGA, getAnimalSaga } from "./redux/store/AnimalReduser";
import UseBlockScrollBody from "./hooks/useBlockScrollBody";

function App() {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const dips = useDispatch();
  if (!isAuth) {
    dips(getAnimalSaga());
  }

  return (
    <div className="App">
      <Header />
      <AppRouter isAuth={isAuth} />
    </div>
  );
}

export default App;
