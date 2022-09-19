import * as React from "react";
import { Route, Routes } from "react-router-dom";
import AuthContainer from "../Auth/AuthContainer";
import PrivedRoute from "../../hoc/PrivedRoute";
import AnimalContainer from "../Animals/AnimalContainer";
import LoginRoute from "../../hoc/LoginRoute";
import PopupAnimalContainer from "../UI/PopupAnimal/PopupAnimalContainer";
import TodayAnimalContainer from "../TodayAnimal/TodayAnimalContainer";
import ChoiseCategory from "../ChoiseCategory/ChoiseCategory";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<ChoiseCategory />} />

        <Route
          path={"animal/*"}
          element={
            <PrivedRoute>
              <AnimalContainer />
            </PrivedRoute>
          }
        >
          <Route path={"id/*"} element={<PopupAnimalContainer />} />
        </Route>
        <Route
          path={"today/*"}
          element={
            <PrivedRoute>
              <TodayAnimalContainer />
            </PrivedRoute>
          }
        >
          <Route path={"id/*"} element={<PopupAnimalContainer />} />
        </Route>

        <Route
          path={"login"}
          element={
            <LoginRoute>
              <AuthContainer />
            </LoginRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
