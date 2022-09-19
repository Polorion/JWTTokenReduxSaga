import AuthContainer from "../Auth/AuthContainer";
import AnimalContainer from "../Animals/AnimalContainer";
import PopupAnimal from "../UI/PopupAnimal/PopupAnimal";
import * as React from "react";
const Q = PopupAnimal;

export const publickRoute = [
  { path: "/animal", elem: AnimalContainer },
  { path: "/today", elem: AnimalContainer },
  { path: "animal/:page", elem: AnimalContainer },
  { path: "animal/:id", elem: Q },
];
export const privedRoute = [{ path: "/auth", elem: <AuthContainer /> }];
