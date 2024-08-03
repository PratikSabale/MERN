import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../commoncomponents/CommonButton";

export default function Boolean() {
  const [boolean, setBoolean] = useState(false);
  const navigate = useNavigate();
  function checkval(arg) {
    setBoolean(!boolean);

    //== equals
    //=== strictly equals
    //!=  not eqals
    //!== strictluy not equals
    //! it is used for vice versa  while comparing value ~| boolean--consider as true and !boolean--consider as false |~
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
        Boolean Variable
      </div>
      {boolean === true ? (
        <div>Boolean Value is true..!</div>
      ) : (
        <div>Boolean Value is False..!</div>
      )}
    </div>
  );
}
