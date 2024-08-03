import React from "react";
import { useFormContext } from "react-hook-form";

function ChildFormThree() {
  const { register } = useFormContext();
  return (
    <div>
      <div>ChildFormThree</div>
      <div>
        <input name="gender" placeholder="Gender" {...register("gender")} />
        <input name="age" placeholder="Age" {...register("age")} />
      </div>
    </div>
  );
}

export default ChildFormThree;
