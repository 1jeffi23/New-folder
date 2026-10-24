// import { useSelector,useDispatch } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import { incremented } from './Redux/Slices/IncrementSlice';
import { fetchdata } from './Redux/Slices/Productslice';
import RTKquery from './Components/RtkQuery'
import ReduxSaga from './Components/ReduxSaga'
const Appredux = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const { products, loading, error } = useSelector((state) => state.products)

    const showproducts = () => {
        dispatch(fetchdata());
    }

    const handleChange = () => {
        dispatch(incremented());

    }
    return (
        <div>
           <h2> RTK query</h2>
            <RTKquery/>
            <br/>
            <h2>Redux Saga </h2>
              <ReduxSaga/>
              <br/>
              <br/>
         <h2> Appredux </h2>
            <div>
                <p>redux count i {count}</p>
                <button onClick={handleChange}>Increment</button>
                <br/>
                <h4>performing async op in redux through readux thunk</h4>
                <button onClick={showproducts}> view Products</button>
                {loading && <h3>Loading...</h3>}

                {error && <h3>{error}</h3>}
                {products.map((product) => (
                    <div style={{ border: "2px dashed black", padding: "12px", margin: "12px", }} key={product.id}>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
          
        </div>
    )
}

export default Appredux