import React from "react";
import { useFormContext } from "react-hook-form";

function ChildFormOne() {
  const { register } = useFormContext();
  return (
    <div>
      <div>Child Form One</div>
      <div>
        <input
          name="firstname"
          placeholder="First Name"
          {...register("firstname")}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          {...register("lastname")}
        />
      </div>
    </div>
  );
}

export default ChildFormOne;
