export const GET_ANIMAL_TODAY_SAGA = "GET_ANIMAL_TODAY_SAGA";
export const SET_ANIMAL_TODAY_SAGA = "SET_ANIMAL_TODAY_SAGA";

export const getAnimalTodaySaga = () => {
  return {
    type: GET_ANIMAL_TODAY_SAGA,
  };
};
export const setAnimalTodaySaga = (data) => {
  return {
    type: SET_ANIMAL_TODAY_SAGA,
    data,
  };
};

const initState = {
  animals: [],
};
export const TodayReduser = (state = initState, action) => {
  switch (action.type) {
    case SET_ANIMAL_TODAY_SAGA: {
      return { ...state, animals: action.data };
    }
    default:
      return state;
  }
};
