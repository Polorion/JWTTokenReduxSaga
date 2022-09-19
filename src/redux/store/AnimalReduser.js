export const GET_ANIMAL_SAGA = "GET_ANIMAL_SAGA";
export const GET_ANIMAL = "GET_ANIMAL";
export const SET_COUNT_ANIMAL = "SET_COUNT_ANIMAL";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_ACTIVE_ANIMAL = "SET_ACTIVE_ANIMAL";
export const SET_IS_OPEN_POPUP = "SET_IS_OPEN_POPUP";
export const SET_RENDER_ANIMAL = "SET_RENDER_ANIMAL";

export const setAnimal = (animal) => {
  return {
    type: GET_ANIMAL,
    animal,
  };
};
export const setActivePopup = (done) => {
  return {
    type: SET_IS_OPEN_POPUP,
    done,
  };
};
export const setAnimalActive = (animal) => {
  return {
    type: SET_ACTIVE_ANIMAL,
    animal,
  };
};
export const setAnimalRender = (number) => {
  return {
    type: SET_RENDER_ANIMAL,
    number,
  };
};
export const setAnimalCount = (count) => {
  return {
    type: SET_COUNT_ANIMAL,
    count,
  };
};
export const setActivePage = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    page,
  };
};
export const getAnimalSaga = () => {
  return {
    type: GET_ANIMAL_SAGA,
  };
};

const initState = {
  animals: [],
  countAnimal: 0,
  activePage: 1,
  renderAnimal: 5,
  activeAnimal: [],
  popupIsOpen: false,
};
export const AnimalReduser = (state = initState, action) => {
  switch (action.type) {
    case GET_ANIMAL: {
      return { ...state, animals: action.animal };
    }
    case SET_IS_OPEN_POPUP: {
      return { ...state, popupIsOpen: action.done };
    }
    case SET_ACTIVE_ANIMAL: {
      return {
        ...state,
        activeAnimal: action.animal,
      };
    }
    case SET_ACTIVE_PAGE: {
      return { ...state, activePage: action.page };
    }
    case SET_COUNT_ANIMAL: {
      return { ...state, countAnimal: action.count };
    }
    case SET_RENDER_ANIMAL: {
      return { ...state, renderAnimal: action.number };
    }
    default:
      return state;
  }
};
