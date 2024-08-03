import React, { useState } from "react";
import Child from "./Child";
import { useNavigate } from "react-router-dom";

export default function Parent() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function parentpage() {
    navigate("/parentpage");
  }

  function goback() {
    navigate(-1);
  }

  return (
    <div>
      <div className="grid grid-cols-8 py-5 px-10 gap-5 bg-green-300 ">
        <div className="border border-gray-600 hover:bg-cyan-400 rounded-full bg-white">
          <button
            type="button"
            onClick={() => {
              parentpage();
            }}
          >
            Parent Page
          </button>
        </div>

        <div className="border border-gray-950 hover:bg-cyan-400 rounded-full  bg-white">
          <button
            type="button"
            onClick={() => {
              goback();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
      <div>
        <div>Count is :{count}</div>
        <Child count={count} setCount={setCount} />
      </div>
    </div>
  );
}
