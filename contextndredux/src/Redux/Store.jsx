
// import counterReducer from './Slices/IncrementSlice';

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/IncrementSlice';
import productReducer from './Slices/Productslice'
import { productApi } from './Services/product';
import createSagaMiddleware from "redux-saga";

import productSagaReducer from "./Slices/productSlice_saga";
import rootSaga from "./Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    sagaproduct: productSagaReducer,
    //RTK query
    [productApi.reducerPath]: productApi.reducer,  

   
  },
  //  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware),

  //  //saga middleware
  //  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(sagaMiddleware),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    productApi.middleware,
    sagaMiddleware
  ),
  


})
sagaMiddleware.run(rootSaga)