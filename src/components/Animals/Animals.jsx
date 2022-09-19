import * as React from "react";
import S from "./Animals.module.css";
import Animal from "../UI/Animal/Animal";
import Spinner from "../UI/Spinner/Spinner";

const Animals = (props) => {
  return (
    <>
      {props.isFetching ? (
        <Spinner />
      ) : (
        <div className={S.animBody}>
          {props.animals.map((el) => {
            return (
              <Animal
                key={el.id}
                name={el.name}
                who={el.spec.name}
                id={el.id}
                setAnimalActive={props.setAnimalActive}
                setActivePopup={props.setActivePopup}
                from={"animal"}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Animals;
