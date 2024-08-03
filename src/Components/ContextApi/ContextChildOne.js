import React, { useContext } from "react";
import { FirstContext } from "./ContextParent";
export default function ContextChildOne() {
  const { name, setName, technology, setTechnology } = useContext(FirstContext);
  return (
    <div>
      <div>
        <div> (Child One Context)</div>
        <div>Name : {name}</div>
        <button
          type="button"
          onClick={() => {
            setName("--Null--");
          }}
        >
          Reset
        </button>
        <div>Technology : {technology}</div>
        <button
          type="button"
          onClick={() => {
            setTechnology("--Null--");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
