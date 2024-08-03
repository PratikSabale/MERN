import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../commoncomponents/CommonButton";

export default function String() {
  let initialState = "Pratik";
  const [String, setString] = useState(initialState);
  const navigate = useNavigate();

  function addSurname(arg) {
    setString(String + arg);
  }

  function resetName() {
    setString(initialState);
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
        String Variable
      </div>
      <div>{String}</div>

      <button
        type="button"
        onClick={() => {
          addSurname(" Sabale");
        }}
      >
        Change Name
      </button>
      <button
        type="button"
        onClick={() => {
          resetName();
        }}
      >
        Rest Name
      </button>
    </div>
  );
}
