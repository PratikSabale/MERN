import React from "react";
import { CommonButton } from "../commoncomponents/CommonButton";
import { Navigate, useNavigate } from "react-router-dom";

function LinkedinHome() {
  const Navigate = useNavigate();
  const [allData, setAllData] = React.useState([]);

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
      <CommonButton
        label="Structuredemo"
        type="button"
        onClick={() => {
          Navigate("/structuredemo");
        }}
      />


      <CommonButton
        label="Final Form"
        type="button"
        onClick={() => {
          Navigate("/finalform");
        }}
      />


      <CommonButton
        label="Form Database"
        type="button"
        onClick={() => {
          Navigate("/formdatabase");
        }}
      />










      <CommonButton
        label="Child Form Structure"
        type="button"
        onClick={() => {
          Navigate("/childformstructure");
        }}
      />
      <CommonButton
        label="Child Form Database"
        type=""
        onClick={() => {
          Navigate("/childformdatatable");
        }}
      />
    </div>
  );
}

export default LinkedinHome;
