import {
  SET_AUTH_SAGA,
  setAuth,
  setFetch,
  setToken,
} from "../store/AuthReduser";
import { takeEvery, put, call, take } from "redux-saga/effects";
import axios from "axios";

export const authorization = async (data) => {
  return await axios.post(
    "https://acits-test-back.herokuapp.com/api/login",
    data
  );
};

export function* AuthWorker(action) {
  yield put(setFetch(true));
  try {
    const resp = yield call(authorization, action.data.form);
    yield put(setToken(resp.data.accessToken));
    yield localStorage.setItem("accessToken", resp.data.accessToken);
    yield put(setAuth(true));
    action.data.callBack();
  } catch (resp) {}
  yield put(setFetch(false));
}
export function* AuthWatcher() {
  yield takeEvery("SET_AUTH_SAGA", AuthWorker);
}
