import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/Slices/productSlice_saga';

const ReduxSaga = () => {
    const dispatch = useDispatch();

const { products, loading, error } = useSelector((state) => state.sagaproduct);
console.log(products);

useEffect(() => {
  dispatch(fetchProducts());
}, []);

  return (
    <div>
     {loading && <h3>Loading...</h3>}

{error && <h3>{error}</h3>}

{products?.map((product) => (
  <div style={{ border: "2px dashed black", padding: "12px", margin: "12px", }} key={product.id}>
   <h2> {product.title}</h2>
    <p>{product.description}</p>
  </div>
))}
    </div>
  )
}

export default ReduxSaga;