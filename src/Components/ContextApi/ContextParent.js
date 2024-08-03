import React, { createContext } from "react";
import ContextChildOne from "./ContextChildOne";
import ContextChildTwo from "./ContextChildTwo";
import { useNavigate } from "react-router-dom";
export const FirstContext = createContext();

export default function ContextParent() {
  const [name, setName] = React.useState("--Null--");
  const [technology, setTechnology] = React.useState("--Null");
  const navigate = useNavigate();
  function ContextParentArray() {
    navigate("/contextparentarray");
  }

  function goback() {
    navigate(-1);
  }
  return (
    <div>
      <div className="grid grid-cols-6 gap-5 px-5 py-5 bg-violet-400">
        <div className="border border-grey rounded-full hover:bg-cyan-300 bg-white">
          <button
            type="button"
            onClick={() => {
              ContextParentArray();
            }}
          >
            Context Parent Array
          </button>
        </div>

        <div className="border border-grey rounded-full hover:bg-cyan-300 bg-white">
          <button
            type="button"
            onClick={() => {
              goback();
            }}
          >
            GO back
          </button>
        </div>
      </div>
      <div> Parent Context</div>
      <FirstContext.Provider
        value={{ name, setName, technology, setTechnology }}
      >
        <div>
          <ContextChildOne />
        </div>
        <div>
          <ContextChildTwo />
        </div>
      </FirstContext.Provider>
    </div>
  );
}
