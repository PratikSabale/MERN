import React, { useContext } from "react";
import { FirstArrayContext } from "./ContextParentArray";

function ContextChildTwoArray() {
  const { stringarray, setStringarray } = useContext(FirstArrayContext);
  const [inputString, setInputString] = React.useState("");

  function inputNewString(argument) {
    let dataArray = [...stringarray];
    dataArray.push(argument);
    setStringarray(dataArray);
    setInputString(" ");
  }

  return (
    <div>
      <div>ContextChildTwoArray</div>
      <div>
        <input
          type="text"
          value={inputString}
          onChange={(e) => {
            setInputString(e.target.value);
          }}
        />
        <button onClick={() => inputNewString(inputString)}>Change name</button>
      </div>
    </div>
  );
}

export default ContextChildTwoArray;
