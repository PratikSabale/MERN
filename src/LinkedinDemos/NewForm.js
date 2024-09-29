import React from "react";
import {
  AddressIcon,
  EmailIdIcon,
  FemaleIcon,
  MaleIcon,
  MobileIcon,
  UploadIcon,
} from "../commonassets/CommonAssets";

function NewForm() {
  const defaultValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    month: "",
    day: "",
    year: "",
    gender: "",
    country: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    pin: "",
  };

  return (
    <div>
      <div className="text-start mx-10 my-10">
        <h1 className=" text-5xl font-bold mb-2">Registration Form</h1>
        <p className="text-xl">
          Please fill out the form below to complete your registration.
        </p>
      </div>
      <form>
        <div className="text-start mx-10 my-10">
          <div className="my-3 mx-2">
            <label className="text-2xl ">Name</label>
          </div>
          <div className="grid sm:grid-cols-3 xl:grid-cols-7 gap-5 mx-10">
            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">First Name</legend>
              <input
                name="firstname"
                className=" border-none mx-5 mb-1 outline-none"
              />
            </fieldset>

            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">Middle Name</legend>
              <input
                name="middlename"
                className="mx-5 mb-1 border-none outline-none"
              />
            </fieldset>

            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">Last Name</legend>
              <input
                name="lastname"
                className="mx-5 mb-1 border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="mb-3  mt-5 mx-2">
            <label className="text-2xl">Birth Date</label>
          </div>
          <div className="grid sm:grid-cols-3 xl:grid-cols-7 gap-5 mx-10">
            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">Date</legend>
              <input
                type="date"
                name="day"
                className="mx-10 mb-1 border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="mb-3  mt-5 mx-2">
            <label className="text-2xl">Gender</label>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-7 mx-10">
            <div className="grid">
              <div className="flex mb-5">
                <input type="radio" name="gender" value="male" />
                <MaleIcon />
              </div>
              <div className="flex">
                <input type="radio" name="gender" value="female" />
                <FemaleIcon />
              </div>
            </div>
            <div>
              <div className="flex">
                <p>Of which country are you a citizen</p>
              </div>
              <div>
                <fieldset className="border border-black rounded-3xl text-start">
                  <legend className="mx-5 px-2">Country</legend>
                  <select
                    name="day"
                    className="mx-10 mb-1 border-none outline-none"
                  >
                    <option value="#">---------</option>
                    <option value="us">United States</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                    <option value="japan">Japan</option>
                    <option value="germany">Germany</option>
                    <option value="uk">United Kingdom</option>
                    <option value="france">France</option>
                    <option value="brazil">Brazil</option>
                    <option value="canada">Canada</option>
                    <option value="russia">Russia</option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 xl:grid-cols-7 my-10 gap-5">
            <div className="grid">
              <div className=" flex mb-3  mt-5 mx-2 gap-2">
                <label className="text-2xl ">Phone</label>
                <MobileIcon />
              </div>
              <div className="mx-10">
                <fieldset className="border border-black rounded-3xl text-start">
                  <legend className="mx-5 px-2">Phone</legend>
                  <input
                    name="phone"
                    className="mx-5 mb-1 border-none outline-none"
                  />
                </fieldset>
              </div>
            </div>
            <div className="grid mx-8">
              <div className="mb-3  mt-5 flex  ">
                <label className="text-2xl ">Email Address</label>
                <EmailIdIcon />
              </div>
              <div>
                <fieldset className="border border-black rounded-3xl text-start">
                  <legend className="mx-5 px-2">Email</legend>
                  <input
                    name="email"
                    className="mx-5 mb-1 border-none px-20 outline-none"
                  />
                </fieldset>
              </div>
            </div>
          </div>

          <div className="my-3 mx-2">
            <label className="text-2xl ">Address</label>
          </div>
          <div className="grid sm:grid-cols-3 xl:grid-cols-7 gap-5 mx-10">
            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">City</legend>
              <input
                name="city"
                className="mx-5 mb-1 focus:border-none outline-none"
              />
            </fieldset>

            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">State</legend>
              <input
                name="state"
                className="mx-5 mb-1 border-none outline-none"
              />
            </fieldset>

            <fieldset className="border border-black rounded-3xl text-start">
              <legend className="mx-5 px-2">Pin</legend>
              <input
                name="pin"
                className="mx-5 mb-1 border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="grid sm:grid-cols-1 xl:grid-cols-3 my-10 gap-5 ">
            <div className="border border-black border-dashed bg-gray-100 py-5">
              <div className=" mx-[47%] ">
                <UploadIcon />
              </div>
              <p className="text-center">Upload Your File</p>
              <p className="text-center px-10">
                Support file type(s): PDF, DOC, JPG
              </p>
              <p className="text-center px-15 whitespace-nowrap">
                Size limit: 10MB per file, up to 10 file(s), with total file
                size not exceeding 50.00 MB
              </p>
              <div className="py-2 mx-[42%] ">
                <button
                  type="button"
                  className="border border-black whitespace-nowrap px-3"
                  onClick={() => {}}
                >
                  Browse File
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewForm;
