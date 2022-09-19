import { applyMiddleware, combineReducers, createStore } from "redux";
import { AnimalReduser } from "./AnimalReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../sagas/sagas";
import { AuthReduser } from "./AuthReduser";
import { TodayReduser } from "./TodayReduser";
const SagaMiddleware = createSagaMiddleware();

const rootReduser = combineReducers({
  Animal: AnimalReduser,
  Auth: AuthReduser,
  Today: TodayReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);
SagaMiddleware.run(rootWatcher);
