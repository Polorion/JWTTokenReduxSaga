import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  GET_ANIMAL_SAGA,
  setAnimal,
  setAnimalCount,
} from "../store/AnimalReduser";
import axios from "axios";
import { setAuth, setFetch } from "../store/AuthReduser";

const getAnimal = (token, limit = 5, offset = 1) => {
  return axios.get(
    `https://acits-test-back.herokuapp.com/api/animals?limit=${limit}&offset=${offset}`,
    {
      headers: { Authorization: `bearer ${token}` },
    }
  );
};

function* AnimalWorker() {
  const token = yield localStorage.getItem("accessToken");
  yield put(setFetch(true));
  const currentPage = yield select((state) => state.Animal.activePage);
  const limit = yield select((state) => state.Animal.renderAnimal);
  const offset = currentPage * limit - limit;
  try {
    const resp = yield call(getAnimal, token, limit, offset);
    yield put(setAnimal(resp.data.results));
    yield put(setAnimalCount(resp.data.count));
    yield put(setAuth(true));
  } catch (e) {
    yield put(setAuth(false));
  }
  yield put(setFetch(false));
}

export function* AnimalWatcher() {
  yield takeEvery(GET_ANIMAL_SAGA, AnimalWorker);
}
