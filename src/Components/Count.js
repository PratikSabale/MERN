import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../commoncomponents/CommonButton";

export default function Count() {
  let initialState = 0;
  const [count, setCount] = useState(initialState);
  const navigate = useNavigate();

  function incrementCount(arg) {
    setCount(count + arg);
  }

  function decrementCount(arg) {
    setCount(count - arg);
  }

  function resetCount(arg) {
    setCount(arg);
  }

  function goback() {
    navigate(-1);
  }

  function homepage() {
    navigate("/");
  }

  return (
    <div>
      <div className="grid  xl:grid-cols-10 sm:grid-cols-2  px-5 gap-5">
        <CommonButton
          label="goback"
          type="button"
          onClick={() => {
            goback();
          }}
        />

        <CommonButton label="Home" type="button" onClick={homepage} />
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "15px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Count Variable
      </div>

      <div>{count} </div>
      <div className="flex flex-wrap lg:justify-center  gap-5">
        <CommonButton
          label="increment Count"
          type="button"
          onClick={() => incrementCount(2)}
        />

        <CommonButton
          label="decrement Count"
          type="button"
          onClick={() => {
            decrementCount(1);
          }}
        />

        <CommonButton
          label="reset count"
          type="button"
          onClick={() => {
            resetCount(0);
          }}
        />
      </div>
    </div>
  );
}
