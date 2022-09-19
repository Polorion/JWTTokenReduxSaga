import * as React from "react";
import PopupAnimal from "./PopupAnimal";
import { useSelector } from "react-redux";
import UseBlockScrollBody from "../../../hooks/useBlockScrollBody";

const PopupAnimalContainer = () => {
  const activeAnimal = useSelector((state) => state.Animal.activeAnimal);
  const [tootle] = UseBlockScrollBody();

  return (
    <div>
      <PopupAnimal animal={activeAnimal} tootle={tootle} />
    </div>
  );
};

export default React.memo(PopupAnimalContainer);
