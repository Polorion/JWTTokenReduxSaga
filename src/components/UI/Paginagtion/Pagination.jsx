import * as React from "react";
import { NavLink } from "react-router-dom";
import S from "./Pagination.module.css";
import {
  getAnimalSaga,
  setActivePage,
} from "../../../redux/store/AnimalReduser";
import { useMemo } from "react";

const Pagination = (props) => {
  const buttonCount = Math.ceil(props.count / props.renderAnimal);
  const countPagination = useMemo(() => {
    const button = [];

    for (let i = 1; i <= buttonCount; i++) {
      button.push(i);
    }
    return button;
  }, [buttonCount]);
  return (
    <div className={S.body}>
      {countPagination &&
        countPagination.map((el, i) => {
          return (
            <NavLink
              onClick={() => {
                props.setActivePage(el);
                props.getAnimalSaga(props.token);
              }}
              key={el}
              className={`${S.button} ${props.activePage == el && S.active}`}
              to={`/animal/page/${el}`}
            >
              {el}
            </NavLink>
          );
        })}
    </div>
  );
};

export default Pagination;
