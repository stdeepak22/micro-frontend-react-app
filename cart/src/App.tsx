import React from "react";
import ReactDOM from "react-dom";
import { CartItemList, CartSliceAction } from "./ToExpose";
import { Provider, useDispatch } from 'react-redux'
import { store } from 'SM';

let i = 1;
const App = () => {
  const dis = useDispatch();
  const addToCart = () => {
    let p = {
      id: `p_id_${i}`,
      title: `Product - ${i}`,
      price: 10 * i
    };
    i++;
    console.log(p);
    
    dis(CartSliceAction.addToCart(p));
  }
  return <>
    <CartItemList />
    <button onClick={addToCart}>Add Dummy Item to Cart</button>
  </>
};


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
