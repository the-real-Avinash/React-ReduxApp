import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/actionType";
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment / Decrement Operator</h1>
      <h4>Using React Redux</h4>
      <div className="quantity">
        <a
          href="#"
          className="decrement"
          title="Decrement"
          onClick={() => dispatch(decNum())}
        >
          <span> - </span>
        </a>
        <input type="text" name="quantity" className="input" value={myState} />
        <a
          href="#"
          className="increment"
          title="Increment"
          onClick={() => dispatch(incNum())}
        >
          <span> + </span>
        </a>
      </div>
    </div>
  );
};

export default App;
