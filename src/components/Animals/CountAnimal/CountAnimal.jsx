import * as React from "react";
import S from "./CountAnimal.module.scss";

const CountAnimal = (props) => {
  const button = [
    {
      name: 5,
    },
    {
      name: 10,
    },
    {
      name: 15,
    },
  ];
  const handler = (n) => {
    props.setAnimalRender(n);
    props.getAnimalSaga();
  };
  return (
    <div className={S.body}>
      <div className={S.title}> Отображать по </div>
      {button.map((el) => {
        return (
          <button
            className={S.button}
            key={el.name}
            onClick={() => {
              handler(el.name);
            }}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
};

export default CountAnimal;
