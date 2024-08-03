import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useNavigate } from "react-router-dom";

export default function ParentPage(isPage) {
  const [boolean, setBoolean] = React.useState(false);
  const navigate = useNavigate();

  function goback() {
    navigate(-1);
  }

  function homepage() {
    navigate("/");
  }
  return (
    <div>
      <div className="grid grid-cols-8 py-5 px-10 gap-5 bg-green-300 ">
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
      <div>
        {boolean === true ? (
          <div>This is Child 1</div>
        ) : (
          <div>This is Child 2 which is by default</div>
        )}
        <button
          type="button"
          onClick={() => {
            setBoolean(true);
          }}
        >
          Child 1
        </button>

        <Child1 setBoolean={setBoolean} />
        <Child2 setBoolean={setBoolean} />
      </div>
    </div>
  );
}
