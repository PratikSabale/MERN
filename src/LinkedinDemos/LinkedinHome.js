import React from "react";
import { CommonButton } from "../commoncomponents/CommonButton";
import { Navigate, useNavigate } from "react-router-dom";

function LinkedinHome() {
  const Navigate = useNavigate();

  return (
    <div>
      <div>LinkedinHome</div>
      <CommonButton
        label="FormDemo"
        type="button"
        onClick={() => {
          Navigate("/reacthookformone");
        }}
      />
      <CommonButton
        label="registration"
        type="button"
        onClick={() => {
          Navigate("/newform");
        }}
      />
    </div>
  );
}

export default LinkedinHome;
