import { all } from "redux-saga/effects";
import { watchProducts } from "./productSaga";


export default function* rootSaga() {
  yield all([
    watchProducts(),
  ]);
}