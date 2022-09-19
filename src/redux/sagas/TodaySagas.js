import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  GET_ANIMAL_SAGA,
  setAnimal,
  setAnimalCount,
} from "../store/AnimalReduser";
import axios from "axios";
import { setAuth, setFetch } from "../store/AuthReduser";
import {
  GET_ANIMAL_TODAY_SAGA,
  setAnimalTodaySaga,
} from "../store/TodayReduser";

const getAnimal = (token) => {
  return axios.get(
    `https://acits-test-back.herokuapp.com/api/executions/today`,
    {
      headers: { Authorization: `bearer ${token}` },
    }
  );
};

function* TodayWorker() {
  const token = yield localStorage.getItem("accessToken");
  yield put(setFetch(true));

  try {
    const resp = yield call(getAnimal, token);
    yield put(setAnimalTodaySaga(resp.data.results));
  } catch (e) {
    yield put(setAuth(false));
  }
  yield put(setFetch(false));
}

export function* TodayWatcher() {
  yield takeEvery(GET_ANIMAL_TODAY_SAGA, TodayWorker);
}
