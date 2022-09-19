import * as React from "react";
import S from "./ChoiseCategory.module.scss";

const ChoiseCategory = () => {
  return (
    <div className={`${S.body} container`}>
      Выбери одну из категорий и авторизуйся, после авторизации ты получишь
      токен который будет жить 10 минут
    </div>
  );
};

export default ChoiseCategory;
