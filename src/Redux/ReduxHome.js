import React from "react";
import { CommonButton } from "../commoncomponents/CommonButton";
import { useNavigate } from "react-router-dom";

function ReduxHome() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div>ReduxHome</div>
      <CommonButton
        label="Page One"
        type="button"
        onClick={() => {
          navigate("/pageone");
        }}
      />
      <CommonButton
        label="Page Two"
        type="button"
        onClick={() => {
          navigate("/pagetwo");
        }}
      />
      <CommonButton
        label="Page Three"
        type="button"
        onClick={() => {
          navigate("/pagethree");
        }}
      />
    </div>
  );
}

export default ReduxHome;
