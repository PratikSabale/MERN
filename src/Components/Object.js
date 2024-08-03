import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../commoncomponents/CommonButton";

export default function Object() {
  let initialState = 0;
  const [object, setObject] = useState(initialState);
  const navigate = useNavigate();
  function original(arg) {
    let user = {
      name: "pratik",
      age: 22,
    };

    setObject(user);

    // setObject({
    //     name:"Gayatri",
    //     age:22,
    // })
  }

  function nextName(arg) {
    let next = structuredClone(object);

    next.name = "gayatri";
    next.age = 22;

    setObject(next);
  }

  function goback() {
    navigate(-1);
  }
  function homepage() {
    navigate("/");
  }
  return (
    <div>
      <div className="grid  xl:grid-cols-10 sm:grid-cols-2  px-5 gap-5">
        <CommonButton
          label="goback"
          type="button"
          onClick={() => {
            goback();
          }}
        />

        <CommonButton label="Home" type="button" onClick={homepage} />
      </div>
      <div
        style={{
          fontWeight: "bold",
        }}
      >
        Object Variable
      </div>
      <div>{object.name}</div>
      <div>{object.age}</div>
      {/* <div>{object?.name + "  " + object?.age}</div> */}

      <CommonButton
        label="Original"
        type="button"
        onClick={() => {
          original();
        }}
      />

      <CommonButton
        label="Next"
        type="button"
        onClick={() => {
          nextName();
        }}
      />
    </div>
  );
}
