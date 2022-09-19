import * as React from "react";
import S from "./Animal.module.css";

import { useNavigate } from "react-router-dom";

const Animal = (props) => {
  const time = props.info ? props.info.time.slice(0, 5) : "";
  const history = useNavigate();

  const handelClick = () => {
    props.setAnimalActive(props.id);
    history(`/${props.from}/id/${props.id}`);
  };
  return (
    <div className={S.body} onClick={handelClick}>
      <div className={S.item}>
        {props.info && (
          <div>
            <div>Время: {time}</div>
            <div>Процедура:{props.info.type}</div>
          </div>
        )}
        <div className={S.name}>{props.who}</div>
        <div className={S.poroda}>{props.name}</div>
      </div>
    </div>
  );
};

export default Animal;
