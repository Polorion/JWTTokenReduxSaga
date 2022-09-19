import * as React from "react";
import S from "./TodayAnimal.module.scss";
import Animal from "../UI/Animal/Animal";

const TodayAnimal = (props) => {
  return (
    <div className={S.bodyAnimals}>
      {props.animals.map((el) => {
        return (
          <Animal
            key={el.id}
            id={el.id}
            who={el.animal.name}
            name={el.animal.spec.name}
            info={{ time: el.time, type: el.type }}
            setAnimalActive={props.setAnimalActive}
            from={"today"}
          />
        );
      })}
    </div>
  );
};

export default TodayAnimal;
