import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

function ChildFormTwo() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "personaldetails",
  });
  return (
    <div>
      <div>ChildFormTwo</div>
      {/* <div>
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
      </div> */}
      <div className="px-[20%] border border-grey">
        {fields.map((field, fieldindex) => {
          return (
            <div className="flex gap-5 flex-wrap my-5">
              <fieldset className="border justify-start text-start border-grey rounded-xl p-1">
                <legend className="ml-5 px-2">Education</legend>
                <input
                  className="text-center"
                  name={"personaldetails[${fieldindex}].education"}
                  // placeholder="Education"
                />
              </fieldset>
              <fieldset className="border justify-start text-start border-grey rounded-xl ">
                {" "}
                <input
                  name={"personaldetails[${fieldindex}].passingyear"}
                  // placeholder="Passing year"
                />
                <legend className="ml-5 px-2">Passing year</legend>
              </fieldset>

              <fieldset className="border justify-start text-start border-grey rounded-xl">
                <input
                  name={"personaldetails[${fieldindex}].place"}
                  // placeholder="Place"
                />
                <legend className="ml-5 px-2">Place</legend>
              </fieldset>

              <button
                type="button"
                className="px-5"
                onClick={() => {
                  append(fieldindex);
                }}
              >
                Add
              </button>
              {fieldindex !== 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    remove(fieldindex);
                  }}
                >
                  Remove
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChildFormTwo;
