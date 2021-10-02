import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions/actions";

import "./Body.css";

import GoToTop from "../assets/helpers/GoToTop";

export default function Home() {
  const counter = useSelector((state) => state.CounterReducer);
  const dispatch = useDispatch();
  return (
    <div className="Body">
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment())}>Click me!</button>
      <GoToTop />
    </div>
  );
}
