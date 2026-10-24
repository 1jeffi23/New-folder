
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProducts,
  setProducts,
  setLoading,
  setError,
} from "../Slices/productSlice_saga";

export function* watchProducts(){
   yield takeLatest(fetchProducts.type,ProductWorker);

}

function* ProductWorker(){
try {
    yield put(setLoading(true));
     const response = yield call(fetch, "https://dummyjson.com/products?limit=5");
     const data = yield call([response,response.json]);
     yield put(setProducts(data.products));
     yield put(setLoading(false));
    
} catch (error) {
    yield put(setError(error.message));
    yield put(setLoading(false));
    
}
}