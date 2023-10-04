import { createSlice } from "@reduxjs/toolkit";

const OtherSlice = createSlice({
    name:'OtherSliceFromHost',
    initialState:{
        showInlineCart: false
    },
    reducers:{
        toggleInlineCart:(state, action)=> {
            state.showInlineCart = !state.showInlineCart;
        }
    }
})

export const OtherSliceAction = OtherSlice.actions;
export const OtherSliceReducer = OtherSlice.reducer;