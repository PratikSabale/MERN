import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function NewForm() {
  const defaultValues = {
    fname: "",
    middlename: "",
    lname: "",
    mobile: "",
    email: "",
    pan: "",
    aadhar: "",
    gender: "",
    age: "",
    photo: "",
    education: "",
    address: "",
  };

  const errorObject = yup.object().shape({
    fname: yup.string().required(),
    middlename: yup.string().required(),
    lname: yup.string().required(),
    mobile: yup.string().required(),
    email: yup.string().required(),
    pan: yup.string().required(),
    aadhar: yup.string().required(),
    gender: yup.string().required(),
    age: yup.string().required(),
    photo: yup.string().required(),
    education: yup.string().required(),
    address: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { error },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(errorObject),
    mode: "onChange",
  });

  const [values, setvalues] = React.useState([]);

  function onSubmitData(data) {
    console.log("Data in the form :",data);
    
    let dataarray = [...values];
    dataarray.push(data);
    setvalues(dataarray);
  }

  // onChange={(e) => {
  //   console.log("aaaaaaa",e.target.files);
    
  //   let file = e.target.files[0];
  //   const reader = new FileReader();
  //   if (file) {
  //     reader.onloadend = () => {
  //       console.log("reader result is :", reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="border border-black mx-20 flex flex-wrap  ">
          <div className="grid sm:grid-cols-3  md:grid-cols-3 xl:grid-cols-7">
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">First Name</legend>
              <input name="fname" {...register("fname")} />
            </fieldset>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Middle Name</legend>
              <input name="middlename" {...register("middlename")} />
            </fieldset>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Last Name</legend>
              <input name="lname" {...register("lname")} />
            </fieldset>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-7">
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10 gap-5">
              <legend className="ml-3 px-2">Upload Photo</legend>
              <input
                type="file"
                name="photo"
                {...register("photo")}
              />
            </fieldset>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Education</legend>
              <input name="education" {...register("education")} />
            </fieldset>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-7">
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Mobile Number</legend>
              <input name="mobile" {...register("mobile")} />
            </fieldset>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Email</legend>
              <input name="email" {...register("email")} />
            </fieldset>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-7">
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Pan Number</legend>
              <input name="pan" {...register("pan")} />
            </fieldset>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Aadhar Number</legend>
              <input name="aadhar" {...register("aadhar")} />
            </fieldset>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-7">
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Gender</legend>
              <input name="gender" {...register("gender")} />
            </fieldset>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Age</legend>
              <input name="age" {...register("age")} />
            </fieldset>
          </div>

          <div>
            <fieldset className="border border-black rounded-xl m-5 py-1 px-1 text-start w-10">
              <legend className="ml-3 px-2">Address</legend>
              <input name="address" {...register("address")} />
            </fieldset>
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>{" "}
      <div className="overflow-x-scroll">
        <table className="my-10 mx-40">
          <thead>
            <tr>
              <td className="border border-black whitespace-nowrap px-5">
                First name
              </td>

              <td className="border border-black whitespace-nowrap px-5">
                Middle Name
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Last name
              </td>

              <td className="border border-black whitespace-nowrap px-5">
                Mobile Number
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Email
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Pan number
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Aadhar number
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Gender
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Age
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Photo
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Education
              </td>
              <td className="border border-black whitespace-nowrap px-5">
                Address
              </td>
            </tr>
          </thead>
          <tbody>
            {values.length > 0
              ? values.map((item, index) => {
                  return (
                    <tr>
                      <td className="border border-black whitespace-nowrap px-5 py-20">
                        {item.fname}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.middlename}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.lname}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.mobile}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.email}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.pan}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.aadhar}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.gender}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.age}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.photo}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.education}
                      </td>
                      <td className="border border-black whitespace-nowrap px-5">
                        {item.address}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewForm;
