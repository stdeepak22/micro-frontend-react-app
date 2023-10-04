import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";

import "./index.css";
import { CounterSliceReducer, CounterSliceAction } from "./Counter/Counter.slice";
import { store, addReducer } from "./store/AppStore";


const CounterDisplay = () => {
  const st = useSelector((st: any) => st?.counter); // same name as inject below
  const dis = useDispatch();
  return <div className="CounterDisplayComponent">
    {st ? "Counter State Found" : "Counter State not found. Inject first."}
    <br />
    {st && <>
      Counter Value is: {st?.counter} <br />
      <button onClick={() => dis(CounterSliceAction.decBy(10))}>-10</button>
      <button onClick={() => dis(CounterSliceAction.dec())}>-</button>
      <button onClick={() => dis(CounterSliceAction.reset())}>RESET</button>
      <button onClick={() => dis(CounterSliceAction.inc())}>+</button>
      <button onClick={() => dis(CounterSliceAction.incBy(10))}>+10</button>
    </>}
  </div>
}


const App = () => {
  const injectScreen2 = () => {
    addReducer('counter', CounterSliceReducer);
  }

  return <Provider store={store}>
    <CounterDisplay />
    <br />
    <button onClick={injectScreen2}>Inject Counter Slice</button>
  </Provider>
};

ReactDOM.render(<App />, document.getElementById("app"));
