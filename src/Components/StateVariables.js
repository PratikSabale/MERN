import { useState } from "react";
import React from "react";
import Count from "./Count";
import { useNavigate } from "react-router-dom";
import String from "./String";
import Boolean from "./Boolean";
import Array from "./Array";
import Object from "./Object";
import { CommonButton } from "../commoncomponents/CommonButton";

export default function StateVariables() {
  let initialArray = [1, 2];

  let intialState = 0;
  //   const [count, setCount] = React.useState(intialState);
  const [count, setCount] = useState(intialState);
  const [string, setString] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [array, setArray] = useState(initialArray);
  const [object, setObject] = useState(null);

  //   const [isCompany,setIsCompany]=useState(false)
  // const [count,setCount]=useState(0)

  //console.log("") --to get info while debugging
  //console.error("") --to get error while debugging
  //console.table(tableVariable) --to get the consoled data in table structure format in the debugging console

  function incrementCount(argument) {
    setCount(count + argument);
    setString(string + `Hello..!${argument}`);
    // setString(`Hello..!${argument}`);
    setBoolean(!boolean);
    // `discount${index}`

    // `The Name is :${dynamic Value}`

    let dataArray = [...array];

    dataArray.push(argument);

    setArray(dataArray);

    // let user = {
    //   name: "John",
    //   age: 25,
    // };
    // setObject(user);
    setObject({
      name: "John",
      age: 25,
    });
  }

  function decrementCount(argument) {
    setCount(count - argument);

    let clone = structuredClone(object);

    clone.age = 30;
    clone.name = "Joe";

    setObject(clone);
  }

  function resetCount(argument) {
    setCount(argument);
  }

  //   if(){

  //   }else{

  //   }

  const navigate = useNavigate();

  function counts() {
    navigate("/count");
  }

  function strings() {
    navigate("/string");
  }

  function booleann() {
    navigate("/boolean");
  }

  function arrayy() {
    navigate("/array");
  }

  function objectt() {
    navigate("/object");
  }

  function goback() {
    navigate(-1);
  }
  return (
    <div>
      <div className="grid xl:grid-cols-5 sm:grid-cols-2 gap-5 py-5 px-10 bg-slate-400">
        <CommonButton
          label="Count Variable"
          type="button"
          onClick={() => {
            counts();
          }}
        />

        <CommonButton
          label="String Variable"
          type="button"
          onClick={() => {
            strings();
          }}
        />

        <CommonButton
          label="Boolean Variable"
          type="button"
          onClick={() => {
            booleann();
          }}
        />

        <CommonButton
          label="Array Variable"
          type="button"
          onClick={() => {
            arrayy();
          }}
        />

        <CommonButton
          label="Object"
          type="button"
          onClick={() => {
            objectt();
          }}
        />

        <CommonButton
          label="Back"
          type="button"
          onClick={() => {
            goback();
          }}
        />
      </div>

      <div
        style={{
          fontWeight: "bold",
          fontSize: "15px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        State Variables
      </div>
      <input
      //   name={`discount${index}`}
      />

      <div>{count}</div>
      <div>{string}</div>
      <div>{object?.name + " " + object?.age}</div>

      {boolean === true ? <div>Boolean Value is true..!</div> : null}
      {/* {boolean === true ? <div>Boolean Value is true..!</div> : ""} */}
      {/* {boolean === true ? <div>Boolean Value is true..!</div> :<div>Boolean Value is false..!</div>} */}

      <div>
        {array.map((item, index) => {
          return (
            <div>
              <div>{item}</div>
              <input
                value={index === 2 ? 90 : " "}
                type="text"
                name={`Amount${index}`}
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => {
          incrementCount(4);
        }}
        //   onClick={incrementCount}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          decrementCount(4);
        }}
      >
        Decrement
      </button>

      <button
        type="button"
        onClick={() => {
          resetCount(0);
        }}
      >
        Reset Count
      </button>
      <Count />
      <String />
      <Boolean />
      <Array />
      <Object />
    </div>
  );
}

//Event :
//onClick  imp
//onChange
//onFoucus
//onBlur
