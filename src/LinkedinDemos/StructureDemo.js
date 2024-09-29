import React from "react";
import {
  EmailIdIcon,
  FemaleIcon,
  MaleIcon,
  MobileIcon,
  UploadIcon,
} from "../commonassets/CommonAssets";
import { useForm } from "react-hook-form";
import dummyprofile from "../commonassets/dummyprofile.jpg";
import { object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.css";

function StructureDemo() {
  const defaultValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    day: "",
    gender: "",
    country: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    pin: "",
    img: "",
  };

  const imageref = React.useRef(null);
  const [img, setImg] = React.useState(dummyprofile);
  const [dataval, setDataVal] = React.useState(null);
  const editref = React.useRef(null);
  const [loader, setLoader] = React.useState(false);

  const errorObject = yup.object().shape({
    firstname: yup.string().required(),
    middlename: yup.string().required(),
    lastname: yup.string().required(),
    day: yup.string().required(),
    gender: yup.string().required(),
    country: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    pin: yup.string().required(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: onchange,
    defaultValues: defaultValues,
    resolver: yupResolver(errorObject),
  });

  function allinfo(data) {
    setLoader(true);
    const timeout = setTimeout(() => {
      let userObject = data;
      userObject.profile = img;
      console.log("data : ", userObject);
      setDataVal(userObject);
    }, 3000);

    return () => clearTimeout(timeout);
  }

  React.useEffect(() => {
    if (dataval !== null) {
      setLoader(false);
    }
  }, [dataval]);

  const handleFile = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleEdit = (e) => {
    let edit = e.target.files[0];

    const reader1 = new FileReader();

    reader1.onloadend = () => {
      setImg(reader1.result);
    };
    reader1.readAsDataURL(edit);
  };
  console.log("imgerror:", errors);

  return (
    <div className="grid grid-cols-2 border border-gray-600 gap-5">
      <div className="border border-gray-600 ">
        <div className="text-start mx-10 my-10">
          <h1 className=" text-5xl font-bold mb-2">Registration Form</h1>
          <p className="text-xl">
            Please fill out the form below to complete your registration.
          </p>
        </div>

        <form onSubmit={handleSubmit(allinfo)}>
          <div className="text-start mx-10 my-10">
            <div className=" my-3 mx-2">
              <label className="text-2xl ">Name</label>
            </div>
            <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-5 mx-10">
              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">First Name</legend>
                <input
                  name="firstname"
                  className=" border-none mx-5 mb-1 outline-none  "
                  {...register("firstname")}
                />
              </fieldset>

              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">Middle Name</legend>
                <input
                  name="middlename"
                  className=" border-none mx-5 mb-1 outline-none  "
                  {...register("middlename")}
                />
              </fieldset>

              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">Last Name</legend>
                <input
                  name="lastname"
                  className=" border-none mx-5 mb-1 outline-none  "
                  {...register("lastname")}
                />
              </fieldset>
            </div>

            <div className="mb-3  mt-5 mx-2">
              <label className="text-2xl">Birth Date</label>
            </div>
            <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-5 mx-10">
              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">Date</legend>
                <input
                  type="date"
                  name="day"
                  className="mx-10 mb-1 border-none outline-none "
                  {...register("day")}
                />
              </fieldset>
            </div>

            <div className="mb-3  mt-5 mx-2">
              <label className="text-2xl">Gender</label>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 mx-10">
              <div className="grid">
                <div className="flex mb-5">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    {...register("gender")}
                  />
                  <MaleIcon />
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    {...register("gender")}
                  />
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
                      name="country"
                      className="mx-10 mb-1 border-none outline-none "
                      {...register("country")}
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

            <div className="grid sm:grid-cols-3 xl:grid-cols-3 my-10 gap-5">
              <div className="grid col-span-1">
                <div className=" flex mb-3  mt-5 mx-2 gap-2">
                  <label className="text-2xl ">Phone</label>
                  <MobileIcon />
                </div>
                <div className="mx-10">
                  <fieldset className="border border-black rounded-3xl text-start">
                    <legend className="mx-5 px-2">Phone</legend>
                    <input
                      name="phone"
                      className=" border-none mx-5 mb-1 outline-none  "
                      {...register("phone")}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="grid col-span-2">
                <div className="mb-3  mt-5 flex gap-2">
                  <label className="text-2xl ml-10">Email Address</label>
                  <EmailIdIcon />
                </div>
                <div>
                  <fieldset className="border border-black rounded-3xl text-start mx-10">
                    <legend className="mx-5 px-2">Email</legend>
                    <input
                      name="email"
                      className="mx-5 mb-1 border-none px-20 outline-none "
                      {...register("email")}
                    />
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="my-3 mx-2">
              <label className="text-2xl ">Address</label>
            </div>
            <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-5 mx-10">
              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">City</legend>
                <input
                  name="city"
                  className="mx-5 mb-1 focus:border-none outline-none "
                  {...register("city")}
                />
              </fieldset>

              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">State</legend>
                <input
                  name="state"
                  className=" border-none mx-5 mb-1 outline-none  "
                  {...register("state")}
                />
              </fieldset>

              <fieldset className="border border-black rounded-3xl text-start">
                <legend className="mx-5 px-2">Pin</legend>
                <input
                  name="pin"
                  className=" border-none mx-5 mb-1 outline-none  "
                  {...register("pin")}
                />
              </fieldset>
            </div>

            <div className="grid sm:grid-cols-1 xl:grid-cols-1 my-10 gap-5 ">
              <div className="border border-black border-dashed  py-5 ">
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
                    onClick={() => {
                      imageref?.current?.click();
                    }}
                  >
                    Browse File
                  </button>
                  <input
                    name="img"
                    className="hidden"
                    type="file"
                    ref={imageref}
                    onChange={(e) => {
                      handleFile(e);
                    }}
                    // {...register("img")}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <button
                type="submit"
                className="border border-gray-800 bg-cyan-400 px-10 py-5 rounded-3xl"
              >
                Submit
              </button>
              <button
                type="reset"
                className="border border-gray-800 bg-pink-500 px-10 py-5 rounded-3xl text-white"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="border border-gray-600">
        {loader === true ? (
          <div className="mt-[30%]">
            <span class="loader"></span>
          </div>
        ) : (
          <div>
            <div>
              <div className="flex justify-center">
                <img
                  className=" rounded-full size-60"
                  src={dataval?.profile ? dataval?.profile : dummyprofile}
                  alt="Image"
                />
              </div>
              <div>
                <label className="font-semibold">Profile Photo</label>
                <button
                  className="border border-gray-700 px-2"
                  onClick={() => {
                    editref.current.click();
                  }}
                >
                  Edit
                </button>
                <input
                  className="hidden"
                  type="file"
                  ref={editref}
                  onChange={(e) => {
                    handleEdit(e);
                  }}
                />
              </div>
            </div>
            <div className="text-start mx-10 mt-5">
              <label className="text-xl">Personal Info</label>
            </div>
            <div className="  grid grid-cols-3 gap-5 py-5 mx-10">
              <div className="border border-gray-600 h-10">
                {dataval?.firstname}
              </div>
              <div className="border border-gray-600 h-10">
                {dataval?.middlename}
              </div>
              <div className="border border-gray-600 h-10">
                {dataval?.lastname}
              </div>
            </div>
            <div className="  grid grid-cols-3 gap-5 py-5 mx-10">
              <div className="border border-gray-600 h-10 col-span-1">
                {dataval?.day}
              </div>
            </div>
            <div className="  grid grid-cols-3 gap-5 py-5 mx-10">
              <div className="border border-gray-600 h-10">
                {dataval?.gender}
              </div>
              <div className="border border-gray-600 h-10">
                {dataval?.country}
              </div>
            </div>
            <div className="  grid grid-cols-3 gap-5 py-5 mx-10">
              <div className="border border-gray-600 h-10 col-span-1">
                {dataval?.phone}
              </div>
              <div className="border border-gray-600 h-10 col-span-2">
                {dataval?.email}
              </div>
            </div>
            <div className="  grid grid-cols-3 gap-5 py-5 mx-10">
              <div className="border border-gray-600 h-10">{dataval?.city}</div>
              <div className="border border-gray-600 h-10">
                {dataval?.state}
              </div>
              <div className="border border-gray-600 h-10">{dataval?.pin}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StructureDemo;
