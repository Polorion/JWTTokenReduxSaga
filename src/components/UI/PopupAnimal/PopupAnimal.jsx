import * as React from "react";
import * as ReactDOM from "react-dom";
import S from "./PopupAnimal.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";

const PopupAnimal = (props) => {
  const node = document.querySelector("#popup");
  const history = useNavigate();

  useEffect(() => {
    props.tootle(true);
  }, []);
  const exit = () => {
    props.tootle(false);
    history(-1);
  };
  const stopProp = (e) => {
    e.stopPropagation();
  };
  if (!node) {
    return;
  }
  return ReactDOM.createPortal(
    <div className={S.body} onClick={exit}>
      <div className={S.content} onClick={stopProp}>
        {props.animal.info && (
          <div className={S.toDay}>
            <div>Сегодня</div>
            <div> Процедура:{props.animal.info.type}</div>
            <div> Время :{props.animal.info.time}</div>
          </div>
        )}
        <div className={S.name}> Имя: {props.animal.name}</div>
        <div className={S.class}>Вид: {props.animal.spec.name}</div>
        <div className={S.old}> Возраст: {props.animal.age}</div>
        {props.animal.height && (
          <div className={S.height}>
            Рост: {props.animal.height}
            {props.animal.heightUnit}
          </div>
        )}
        {props.animal.weight && (
          <div className={S.weight}>
            Вес: {props.animal.weight}
            {props.animal.weightUnit}
          </div>
        )}
      </div>
    </div>,
    node
  );
};

export default PopupAnimal;
