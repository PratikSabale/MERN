import React, { useContext } from "react";
import { FirstArrayContext } from "./ContextParentArray";

function ContextChildOneArray() {
  const { array, setArray } = useContext(FirstArrayContext);
  const [inputValue, setInputValue] = React.useState(0);
  function ModifyArray(argument) {
    let dataarray = [...array];
    dataarray.push(argument);
    setArray(dataarray);
    setInputValue(0);
  }
  return (
    <div>
      <div>ContextChildOneArray</div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onFocus={setInputValue}
      />
      <button
        type="button"
        onClick={() => {
          ModifyArray(inputValue);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ContextChildOneArray;
