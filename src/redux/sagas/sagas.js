import { all } from "redux-saga/effects";
import { AnimalWatcher } from "./AnimalSagas";
import { AuthWatcher } from "./AuthSagas";
import { TodayWatcher } from "./TodaySagas";

export function* rootWatcher() {
  yield all([AnimalWatcher(), AuthWatcher(), TodayWatcher()]);
}
