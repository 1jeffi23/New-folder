//product slice to unserstand asyncthunk
import { createSlice } from '@reduxjs/toolkit'

const productSliceSaga = createSlice({
    name: 'productSaga',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {
        //it just create action productSaga/fetchProducts to give signal to saga
        fetchProducts: (state) => { },

        setProducts: (state,action)=>{
            state.products = action.payload;
        },

        setLoading: (state,action)=>{
            state.loading = action.payload;
        },

        setError: (state,action)=>{
           state.error = action.payload;
        }

    },
   

  
});

export const {fetchProducts,setProducts,setLoading,setError } = productSliceSaga.actions
export default productSliceSaga.reducer