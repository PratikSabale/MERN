import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../commoncomponents/CommonButton";

export default function Array() {
  let initialState = [1, 2, 3, 4, 5];
  const [array, setArray] = useState(initialState);
  const navigate = useNavigate();

  //console.table(tableVariable) --to get the consoled data in table structure format in the debugging console

  function addNumber(arg) {
    let dataarray = [...array];
    dataarray.push(arg);
    setArray(dataarray);
  }

  function resetArray(arg) {
    setArray(initialState);
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
        }}
      >
        Array Variable
      </div>
      <div>{array}</div>
      <button
        type="button"
        onClick={() => {
          addNumber(6);
        }}
      >
        Add number
      </button>

      <button
        type="button"
        onClick={() => {
          resetArray();
        }}
      >
        Rest
      </button>
    </div>
  );
}
