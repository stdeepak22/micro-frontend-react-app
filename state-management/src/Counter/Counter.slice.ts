import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter-slice',
    initialState:{
        counter:0
    },
    reducers:{
        inc:(state)=>{
            state.counter++;
        },
        incBy:(state, action)=>{
            state.counter += action.payload;
        },
        dec:(state)=>{
            state.counter--;
        },
        decBy:(state, action)=>{
            state.counter -= action.payload;
        },
        reset:(state)=>{
            state.counter = 0;
        }
    }
})

export const CounterSliceAction = counterSlice.actions;
export const CounterSliceReducer = counterSlice.reducer;