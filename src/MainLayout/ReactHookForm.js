import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactHookFormOne from "../LinkedinDemos/ReactHookFormOne";

function ReactHookForm() {
  const defaultValues = {
    // sr:"",
    firstname: "",
    middlename: "",
    lastname: "",
    mobilenumber: "",
    aadhar: "",
  };

  const errrObject = yup.object().shape({
    firstname: yup
      .string()
      .required("Enter First Name")
      .matches(/^[a-z ,.'-]+$/i, "Please Enter Proper Name"),
    middlename: yup.string().required(),
    lastname: yup.string().required(" Plz Enter last name !!"),
    mobilenumber: yup.string().required().min(10).max(12),
    aadhar: yup.string().required().min(12).max(12),
  });

  const [multiple, setMultiple] = React.useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(errrObject),
    mode: "onChange",
  });

  console.log("check it correct : ", errors);
  function onSubmitData(data) {
    let dataarray = [...multiple];
    dataarray.push(data);
    setMultiple(dataarray);
    //console.log("values are : ", data);
  }
  return (
    <div>
      <div>ReactHookForm</div>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <input
            name="firstname"
            {...register("firstname")}
            placeholder="First Name"
          />
          <div className=" text-red-600 ">{errors?.firstname?.message}</div>
        </div>

        <div>
          <input
            name="middlename"
            {...register("middlename")}
            placeholder="Middle Name"
          />
          <div className=" text-red-600 ">{errors?.middlename?.message}</div>
        </div>
        <div>
          <input
            name="lastname"
            {...register("lastname")}
            placeholder="Last Name"
          />
          <div>{errors?.lastname?.message}</div>
        </div>
        <div>
          <input
            name="mobilenumber"
            {...register("mobilenumber")}
            placeholder="Mobile Number"
          />
        </div>
        <div>
          <input
            name="aadhar"
            {...register("aadhar")}
            placeholder="Aadhar Number"
          />
        </div>
        <div className="my-3">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="flex justify-center my-5">
        <table>
          <thead>
            <tr>
              <td className="border border-gray-400 px-5">Sr.No</td>
              <td className="border border-gray-400 px-5">First Name</td>
              <td className="border border-gray-400 px-5">Middle Name</td>
              <td className="border border-gray-400 px-5">Last Name</td>
              <td className="border border-gray-400 px-5">Mobile Number</td>
              <td className="border border-gray-400 px-5">Aadhar Number</td>
            </tr>
          </thead>
          <tbody>
            {multiple.length > 0
              ? multiple.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.firstname}</td>
                      <td>{item.middlename}</td>
                      <td>{item.lastname}</td>
                      <td>{item.mobilenumber}</td>
                      <td>{item.aadhar}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <ReactHookFormOne />
    </div>
  );
}

export default ReactHookForm;
