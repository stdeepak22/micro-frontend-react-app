import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { store } from 'SM';
import { ProductList } from './ToExpose'

const App = () => {
  return <Provider store={store}>
    <ProductList actionOnAddToCart={()=>console.log('add product to cart')}/>
  </Provider>
};

ReactDOM.render(<App />, document.getElementById("app"));
