import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ChildFormOne from "./ChildFormOne";
import ChildFormTwo from "./ChildFormTwo";
import ChildFormThree from "./ChildFormThree";

function ParentForm() {
  const defaultValues = {
    firstname: "",
    lastname: "",

    education: "",
    passingyear: "",

    gender: "",
    age: "",
  };

  const method = useForm({
    defaultValues: defaultValues,
    mode: onchange,
  });
  const { handleSubmit, register } = method;
  function onSubmitData(data) {
    console.log("Check :", data);
  }

  return (
    <div>
      <div>ParentForm</div>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <ChildFormOne />
          <ChildFormTwo />
          <ChildFormThree />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ParentForm;
