import React, { useContext } from "react";
import { FirstContext } from "./ContextParent";

export default function ContextChildTwo() {
  const { setName, setTechnology } = useContext(FirstContext);
  return (
    <div>
      <div>(Child Two Context)</div>
      <button
        type="button"
        onClick={() => {
          setName("Pratik");
          //   setTechnology("Mern");
        }}
      >
        {" "}
        SetName
      </button>
      <button type="button" onClick={() => {}}>
        setTechnology
      </button>
    </div>
  );
}
