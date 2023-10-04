import { addReducer } from 'SM';
import { CartItemList } from './cart/CartItemList';
import { ModuleState as CartStateType, CartSliceReducer, CartSliceAction } from './cart/cart.slice'


//inject Cart Slice;
const CartStateName = 'st_cart'
addReducer(CartStateName, CartSliceReducer);

export type { CartStateType };

export {
    CartStateName,
    CartSliceAction,
    CartItemList,
}