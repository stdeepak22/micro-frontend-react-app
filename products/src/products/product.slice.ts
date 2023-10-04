import { createSlice } from "@reduxjs/toolkit";

interface Product{
    id: string,
    title: string,
    price: number
}

const initState :{
    products: Product[]
} = {
    products:  []
}

const ProductSlice = createSlice({
    name:'product-slice',
    initialState: initState,
    reducers:{
        setProducts: (state, action)=> {
            state.products = action.payload;
        },
        addProduct: (state, action)=> {
            state.products.push(action.payload);
        }
    }
})


export type  ModuleState = typeof initState;
export const ProductSliceAction = ProductSlice.actions;
export const ProductSliceReducer = ProductSlice.reducer;