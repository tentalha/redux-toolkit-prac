import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispath = useDispatch();

  return (
    <div>
      <div>Value: {count}</div>
      <button onClick={() => dispath(increment())}>Increment</button>
      <button onClick={() => dispath(decrement())}>Decrement</button>
      <button onClick={() => dispath(incrementByAmount(10))}>
        Increment By 10
      </button>
      <button onClick={() => dispath(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
