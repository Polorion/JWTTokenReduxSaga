import * as React from "react";
import { connect } from "react-redux";
import Animals from "./Animals";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  getAnimalSaga,
  setActivePage,
  setActivePopup,
  setAnimalActive,
  setAnimalRender,
} from "../../redux/store/AnimalReduser";
import Pagination from "../UI/Paginagtion/Pagination";
import CountAnimal from "./CountAnimal/CountAnimal";
import { transformAnimalFromAnimal } from "../../utils/transformAnimalFromAnimal";

const AnimalContainer = (props) => {
  useEffect(() => {
    props.getAnimalSaga(props.token);
  }, []);
  const setActiveAnimal = (id) => {
    const animal = props.animals.filter((el) => el.id === id);
    props.setAnimalActive(transformAnimalFromAnimal(animal));
  };
  return (
    <>
      <Outlet />
      {/*<CountAnimal*/}
      {/*  getAnimalSaga={props.getAnimalSaga}*/}
      {/*  setAnimalRender={props.setAnimalRender}*/}
      {/*/>*/}
      <div className={"container"}>
        <Pagination
          count={props.countAnimal}
          renderAnimal={props.renderAnimal}
          activePage={props.activePage}
          setActivePage={props.setActivePage}
          getAnimalSaga={props.getAnimalSaga}
          token={props.token}
        />
        <Animals
          animals={props.animals}
          token={props.token}
          isFetching={props.isFetching}
          setAnimalActive={setActiveAnimal}
          setActivePopup={props.setActivePopup}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.Auth.token,
    isFetching: state.Auth.isFetching,
    animals: state.Animal.animals,
    activePage: state.Animal.activePage,
    renderAnimal: state.Animal.renderAnimal,
    countAnimal: state.Animal.countAnimal,
    popupIsOpen: state.Animal.popupIsOpen,
    activeAnimal: state.Animal.activeAnimal,
  };
};
export default connect(mapStateToProps, {
  getAnimalSaga,
  setActivePage,
  setAnimalActive,
  setActivePopup,
  setAnimalRender,
})(AnimalContainer);
