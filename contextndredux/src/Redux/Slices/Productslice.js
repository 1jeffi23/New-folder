//product slice to unserstand asyncthunk
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchdata = createAsyncThunk(
    'products/fetchproducts',
    async() => {
            const response = await fetch('https://dummyjson.com/products?limit=3&skip=0');
            const data = await response.json();
            return data.products;

    });
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {
        clearProducts: (state) => {
            state.products = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchdata.pending, (state) => {
            state.loading = true;
            state.error = null;

        }).addCase(fetchdata.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        }).addCase(fetchdata.rejected, (state, action) => {
            state.error = action.error.message;

        });

    },
});

export const {clearProducts } = productSlice.actions
export default productSlice.reducer