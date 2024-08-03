import React from "react";
import StateVariables from "./StateVariables";
import Calculator from "./Calculator";
import Parent from "./PropsAndCallback/Parent";
import ParentPage from "./PropsAndCallback/ParentPage";
import ContextParent from "./ContextApi/ContextParent";
import ContextParentArray from "./ContextApi/ContextParentArray";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../commoncomponents/CommonButton";

function MainApp() {
  const navigate = useNavigate();

  function statevariables() {
    navigate("/statevariable");
  }

  function propsandCallback() {
    navigate("/parent");
  }

  function contextapi() {
    navigate("/contextparent");
  }

  function reactrouter() {
    navigate("/mainlayout");
  }

  function reactform() {
    navigate("/reactform");
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-6 gap-5  py-10 px-5 bg-slate-400 my-5">
        <CommonButton
          label="State Variable"
          type="button"
          onClick={() => {
            statevariables();
          }}
        />

        <CommonButton
          label="Props And CallBack"
          type="button"
          onClick={() => {
            propsandCallback();
          }}
        />

        <CommonButton
          label="Context API"
          type="button"
          onClick={() => {
            contextapi();
          }}
        />

        <CommonButton
          label="React Router"
          type="button"
          onClick={() => {
            reactrouter();
          }}
        />

        <CommonButton
          label="React Form"
          type="button"
          onClick={() => {
            reactform();
          }}
        />
        <CommonButton
          label="React Hook Form"
          type="button"
          onClick={() => {
            navigate("/reacthookform");
          }}
        />
        <CommonButton
          label="LinkedIn Demos"
          type="button"
          onClick={() => {
            navigate("/reacthookformone");
          }}
        />
      </div>

      <div
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        //   columnGap: "10px",
        // }}
        className="grid xl:grid-cols-2 gap-3x px-[5px] py-5"
      >
        <fieldset
          className=" bg-cyan-200 py-5"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
            marginTop: "10px",
          }}
        >
          <legend
            // style={{
            //   marginLeft: "25px",
            //   fontWeight: "bold",
            //   fontSize: "15px",
            // }}
            className="ml-[25px] font-bold text-[15px]"
          >
            Learning State Variables
          </legend>
          <div>
            <StateVariables />
          </div>
        </fieldset>

        <fieldset
          className=" bg-cyan-200 py-5"
          style={{
            border: "1px solid black",
            borderRadius: "10px",

            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "100px",
            marginTop: "10px",
          }}
        >
          <legend
            style={{
              marginLeft: "25px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Calculate Amount Task 1
          </legend>
          <div>
            <Calculator />
          </div>
        </fieldset>

        <fieldset
          className="bg-green-100"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "100px",
            marginTop: "10px",
          }}
        >
          <legend
            style={{
              marginLeft: "25px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Props And Callback
          </legend>
          <div>
            <Parent />
          </div>
        </fieldset>

        <fieldset
          className="bg-green-100"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "100px",
            marginTop: "10px",
          }}
        >
          <legend
            style={{
              marginLeft: "25px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Props And Callback Task
          </legend>
          <div>
            <ParentPage />
          </div>
        </fieldset>

        <fieldset
          className="bg-violet-200"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "100px",
            marginTop: "10px",
          }}
        >
          <legend
            style={{
              marginLeft: "25px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Context Api
          </legend>
          <div>
            <ContextParent />
          </div>
        </fieldset>

        <fieldset
          className="bg-violet-200"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "100px",
            marginTop: "10px",
          }}
        >
          <legend
            style={{
              marginLeft: "25px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Context Api Task
          </legend>
          <div>
            <ContextParentArray />
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default MainApp;
