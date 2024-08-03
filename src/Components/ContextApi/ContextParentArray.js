import React, { createContext } from "react";
import ContextChildOneArray from "./ContextChildOneArray";
import ContextChildTwoArray from "./ContextChildTwoArray";
import { useNavigate } from "react-router-dom";
export const FirstArrayContext = createContext();

function ContextParentArray() {
  let initialArray = [1, 2];
  const [array, setArray] = React.useState(initialArray);
  const [stringarray, setStringarray] = React.useState(["Pratik"]);
  const navigate = useNavigate();
  function pushArray(argument) {
    let dataarray = [...array];
    dataarray.push(argument);
  }

  function goback() {
    navigate(-1);
  }
  function homepage() {
    navigate("/");
  }
  return (
    <div>
      <div className="grid grid-cols-8 gap-5 px-5 py-5 bg-violet-400">
        <div className="border border-grey rounded-full hover:bg-cyan-300 bg-white">
          <button
            type="button"
            onClick={() => {
              goback();
            }}
          >
            Go Back
          </button>
        </div>
        <div className="border border-gray-950 hover:bg-cyan-400 rounded-full  bg-white">
          <button
            type="button"
            onClick={() => {
              homepage();
            }}
          >
            Home Page
          </button>
        </div>
      </div>
      <div>Context Parent Array</div>
      <FirstArrayContext.Provider
        value={{ array, setArray, stringarray, setStringarray }}
      >
        <div>
          <ContextChildOneArray />
        </div>
        <div>
          <ContextChildTwoArray />
        </div>
      </FirstArrayContext.Provider>

      {array.map((item, index) => {
        return <div>{item}</div>;
      })}

      {stringarray.map((item, index) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}

export default ContextParentArray;
