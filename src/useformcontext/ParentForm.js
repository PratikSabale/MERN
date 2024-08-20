import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ChildFormOne from "./ChildFormOne";
import ChildFormTwo from "./ChildFormTwo";
import ChildFormThree from "./ChildFormThree";
import NewForm from "../LinkedinDemos/NewForm";

function ParentForm() {
  const defaultValues = {
    firstname: "",
    lastname: "",

    personaldetails: [{ education: "", passingyear: "", place: "" }],

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
          <NewForm />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ParentForm;
