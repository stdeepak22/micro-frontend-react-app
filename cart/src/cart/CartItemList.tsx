import {CartItem, CartSliceAction, ModuleState} from './cart.slice'
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import classes from './Cart.module.css';

interface ItemInfoProps {
    item: CartItem;
}

const ItemInfo = (props:ItemInfoProps)=> {
    const dis = useDispatch();
    return <div className={classes.cartItemInfo}>
        <div className={classes.leftSection}>
            <div className={classes.title}>{props.item.title}</div>

            Qty: {props.item.qty} @ Rs. {props.item.price} = Total - Rs. {props.item.total}
        </div>
        <div className={classes.rightSection}>
            <button onClick={()=>dis(CartSliceAction.changeQty({prodId: props.item.prodId, by: 1}))}>+</button>
            <button onClick={()=>dis(CartSliceAction.changeQty({prodId: props.item.prodId, by: -1}))}>-</button>
        </div>
    </div>
}

const CartItemList = ()=> {
    let st:ModuleState  =  useSelector((st:any)=>st.st_cart);
    const noItem = st.items.length ===0;
    return <ul className={classes.cartItemList}>
        {noItem
        ? <li>No Items</li>
        : st.items.map(i=><li key={i.prodId} className={classes.cartItem}><ItemInfo item={i} /></li>)}
    </ul>
}


export { CartItemList };