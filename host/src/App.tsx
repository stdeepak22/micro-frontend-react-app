import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { store, addReducer } from 'SM';
import { Provider, useSelector, useDispatch } from 'react-redux'
import "./index.css";
import { OtherSliceReducer } from "./test-slice/OtherSlice";
import { HeaderComponent } from "./header/header";
import { ProductList } from 'products'
import { CartSliceAction, CartItemList } from 'cart'
import classes from './App.module.css';

const App = () => {
  let st = useSelector((st: any) => st.st_otherState);
  let dis = useDispatch();
  const addToCart = (p: any) => {
    dis(CartSliceAction.addToCart(p))
  }
  return <div className={classes.appContainer}>
    <HeaderComponent />
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <ProductList actionOnAddToCart={addToCart} />
      </div>
      {st.showInlineCart && <div className={classes.rightContainer}>
        <div className={classes.fixedContainer}>
          <h3>Items in Cart</h3>
          <CartItemList />
        </div>
      </div>
      }
    </div>
  </div>
};


addReducer('st_otherState', OtherSliceReducer);
const RootApp = () => {
  return <Provider store={store}>
    <App />
  </Provider>
}

ReactDOM.render(<RootApp />, document.getElementById("app"));
