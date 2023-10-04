import { createSlice } from "@reduxjs/toolkit";

export interface CartItem{
    prodId: string,
    title: string,
    price: number,
    qty: number,
    total: number
}

const initState :{
    items: CartItem[]
} = {
    items:  []
}

const CartSlice = createSlice({
    name:'cart-slice',
    initialState: initState,
    reducers:{
        addToCart: (state, action)=> {
            let p = action.payload;
            let itemInCart = state.items.find(c=>c.prodId === p.id);
            if(itemInCart){
                itemInCart.qty++;
                itemInCart.price = p.price;
                itemInCart.total = itemInCart.qty * itemInCart.price;
            }else{
                state.items.push({
                    prodId: p.id,
                    title: p.title,
                    price : p.price,
                    qty: 1,
                    total: p.price
                })
            }
        },
        changeQty: (state, action)=>{
            let pId = action.payload.prodId;
            let by = action.payload.by;
            let itemInCart = state.items.find(c=>c.prodId === pId);
            if(itemInCart){
                itemInCart.qty += by;
                itemInCart.total = itemInCart.qty * itemInCart.price;
                if(itemInCart.qty <= 0){
                    state.items = state.items.filter(c=>c!==itemInCart);
                }
            }
        },
        removeFromCart: (state, action)=> {
            let p = action.payload;
            let itemInCart = state.items.find(c=>c.prodId === p.id);
            if(itemInCart){
                if(itemInCart.qty > 1){
                    itemInCart.qty--;
                    itemInCart.price = p.price;
                    itemInCart.total = itemInCart.qty * itemInCart.price;
                }else{
                    state.items = state.items.filter(c=>c!==itemInCart);
                }
            }
        }
    }
})


export type  ModuleState = typeof initState;
export const CartSliceAction = CartSlice.actions;
export const CartSliceReducer = CartSlice.reducer;