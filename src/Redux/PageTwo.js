import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementNumber, incrementNumber } from "./PageOne";

function PageTwo() {
  const dispatch = useDispatch();

  const number = useSelector((state) => state["pageone"]["value"]);
  console.log("The State from the store", number);

  return (
    <div>
      <div>PageTwo</div>
      <button
        type="button"
        onClick={() => {
          dispatch(incrementNumber(10));
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(decrementNumber(5));
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default PageTwo;
