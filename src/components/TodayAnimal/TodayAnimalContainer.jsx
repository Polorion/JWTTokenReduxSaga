import * as React from "react";
import { connect } from "react-redux";
import S from "./TodayAnimal.module.scss";
import TodayAnimal from "./TodayAnimal";
import { getAnimalTodaySaga } from "../../redux/store/TodayReduser";
import { useEffect } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { setAnimalActive } from "../../redux/store/AnimalReduser";
import { Outlet } from "react-router-dom";
import { transformAnimalFromToday } from "../../utils/transformAmimalFromTody";

const TodayAnimalContainer = (props) => {
  useEffect(() => {
    props.getAnimalTodaySaga();
  }, []);

  const setActiveAnimal = (id) => {
    const animal = props.animals.filter((el) => el.id === id);
    props.setAnimalActive(transformAnimalFromToday(animal));
  };
  return (
    <div className={S.body}>
      <Outlet />
      <div className={"container"}>
        {props.isFetching ? (
          <Spinner />
        ) : (
          <TodayAnimal
            animals={props.animals}
            setAnimalActive={setActiveAnimal}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    animals: state.Today.animals,
    isFetching: state.Auth.isFetching,
  };
};
export default connect(mapStateToProps, {
  getAnimalTodaySaga,
  setAnimalActive,
})(TodayAnimalContainer);
