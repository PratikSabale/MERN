import React from "react";
import { useFormContext } from "react-hook-form";

function ChildFormTwo() {
  const { register } = useFormContext();
  return (
    <div>
      <div>ChildFormTwo</div>
      <div>
        <input
          name="education"
          placeholder="Education"
          {...register("education")}
        />
        <input
          name="passingyear"
          placeholder="Passing Year"
          {...register("passingyear")}
        />
      </div>
    </div>
  );
}

export default ChildFormTwo;
