import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counterReducer.c);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const incrementwithPayloadHandler = () => {
    dispatch({ type: "INCREMENTWITHPAYLOAD", payload: 10 });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementwithPayloadHandler}>++</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
