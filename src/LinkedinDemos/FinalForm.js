import React, { createContext } from "react";
import { ProfileIcon } from "../commonassets/CommonAssets";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { current } from "@reduxjs/toolkit";
import FormDatabase from "./FormDatabase";
import { useDispatch } from "react-redux";
import { adduser } from "./DataTransporter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// export const Database = createContext();

function FinalForm() {
  const defaultValues = {
    uhid: "",
    mobileno: "",
    email: "",
    prefix: "Prefix",
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    age: "",
    years: "",
    months: "",
    days: "",
    gender: "",
    bloodgroup: "",
    maritalstatus: "",
    nationality: "",
    profileimg: "",
    identificationdoc: "",
    identificationno: "",
    identificationdocimg: "",
    housedetails: "",
    streetadd: "",
    country: "",
    state: "",
    district: "",
    pin: "",
    area: "",
    tehsil: "",
    city: "",
    incomerange: "",
    incomedoc: "",
    incomedocimg: "",
    refferaltype: "",
    doctorname: "",
    dateofvisit: "",
    patientsource: "",
    visittype: "",
    patientcategory: "",
    department: "",
    cabin: "",
    doctor: "",
    reason: "",
    nameofrepresentative: "",
    mobileofrepresentative: "",
    relationshiptopatient: "",
    address: "",
    city1: "",
  };
  const dispatch = useDispatch();

  const errorObject = yup.object().shape({
    uhid: yup.string().required("Enter UHID"),
    mobileno: yup.string().required(),
    email: yup.string().required(),
    // prefix: yup.string().required(),
    // firstname: yup.string().required(),
    // middlename: yup.string().required(),
    // lastname: yup.string().required(),
    // dob: yup.string().required(),
    // age: yup.string().required(),
    // years: yup.string().required(),
    // months: yup.string().required(),
    // days: yup.string().required(),
    // gender: yup.string().required(),
    // bloodgroup: yup.string().required(),
    // maritalstatus: yup.string().required(),
    // nationality: yup.string().required(),
    // profileimg: yup.string().required(),
    // identificationdoc: yup.string().required(),
    // identificationno: yup.string().required(),
    // identificationdocimg: yup.string().required(),
    // housedetails: yup.string().required(),
    // streetadd: yup.string().required(),
    // country: yup.string().required(),
    // state: yup.string().required(),
    // district: yup.string().required(),
    // pin: yup.string().required(),
    // area: yup.string().required(),
    // tehsil: yup.string().required(),
    // city: yup.string().required(),
    // incomerange: yup.string().required(),
    // incomedoc: yup.string().required(),
    // incomedocimg: yup.string().required(),
    // refferaltype: yup.string().required(),
    // doctorname: yup.string().required(),
    // dateofvisit: yup.string().required(),
    // patientsource: yup.string().required(),
    // visittype: yup.string().required(),
    // patientcategory: yup.string().required(),
    // department: yup.string().required(),
    // cabin: yup.string().required(),
    // doctor: yup.string().required(),
    // reason: yup.string().required(),
    // nameofrepresentative: yup.string().required(),
    // mobileofrepresentative: yup.string().required(),
    // relationshiptopatient: yup.string().required(),
    // address: yup.string().required(),
    // city1: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(errorObject),
  });

  const [alldata, setAllData] = React.useState([]);
  const imgref = React.useRef(null);
  const [profileImg, setProfileImg] = React.useState("");
  const [identificationImg, setIdentificationImg] = React.useState("");

  function dataSubmit(data) {
    let formData = data;
    formData.image = profileImg;
    formData.identificationdocumentimage = identificationImg;

    dispatch(adduser(formData));
    toast("Submiteed Successfully!");
    // alert("Form Submitted Successfully..!!");
    reset(defaultValues);
    setProfileImg("");
  }

  const handleFile = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleIdentificationImg = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setIdentificationImg(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(dataSubmit)}>
        <div className="px-28 ">
          <div>
            <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">
              Personal Details
            </h1>
          </div>

          <div className=" grid grid-cols-3 gap-5 mx-5">
            <div className="grid  py-2">
              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <input
                    className="w-[97%] outline-none placeholder-black"
                    placeholder="UHID"
                    name="uhid"
                    {...register("uhid")}
                  />
                </fieldset>
                <div>{errors?.uhid?.message}</div>
              </div>

              <div className="grid grid-cols-3 gap-2 ">
                <div className="border-gray-700">
                  <fieldset className="border border-gray-700 rounded-lg">
                    <select
                      className="w-[95%] outline-none"
                      name="prefix"
                      {...register("prefix")}
                    >
                      <option selected={true} value="Prefix">
                        Prefix
                      </option>
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-span-2 border-gray-700">
                  <fieldset className="border border-gray-700 rounded-lg">
                    <input
                      className="w-[95%] outline-none placeholder-black"
                      placeholder="First name"
                      name="firstname"
                      {...register("firstname")}
                    />
                  </fieldset>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 my-2">
                <div className="col-span-2">
                  <fieldset className="border border-gray-700 rounded-lg">
                    <input
                      className="w-[96%] outline-none"
                      placeholder="Date of birth"
                      type="date"
                      name="dob"
                      {...register("dob")}
                    />
                  </fieldset>
                </div>
                <div>
                  {" "}
                  <fieldset className="border border-gray-700 rounded-lg">
                    <input
                      className="w-[90%] outline-none placeholder-black"
                      placeholder="Age"
                      name="age"
                      {...register("age")}
                    />
                  </fieldset>
                </div>
              </div>

              <div>
                <fieldset className="border border-gray-700 rounded-lg">
                  <select
                    className="w-[98%] outline-none"
                    name="bloodgroup"
                    {...register("bloodgroup")}
                  >
                    <option>Blood group</option>
                    <option>A positive (A+)</option>
                    <option>A negative (A-)</option>
                    <option>B positive (B+)</option>
                    <option>B negative (B-)</option>
                    <option>O positive (O+)</option>
                    <option>O negative (O-)</option>
                    <option>AB positive (AB+)</option>
                    <option>AB negative (AB-)</option>
                  </select>
                </fieldset>
              </div>

              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <select
                    className="w-[98%] outline-none"
                    name="identificationdoc"
                    {...register("identificationdoc")}
                  >
                    <option value="#">Identification Document</option>
                    <option value="aadhar">Aadhar Card</option>
                    <option value="pan">PAN Card</option>
                  </select>
                </fieldset>
              </div>
            </div>

            <div className="grid py-2 ">
              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <input
                    className="w-[97%] outline-none  placeholder-black"
                    placeholder="Mobile No"
                    name="mobileno"
                    {...register("mobileno")}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <input
                    className="w-[97%] outline-none  placeholder-black"
                    placeholder="Middle name"
                    name="middlename"
                    {...register("middlename")}
                  />
                </fieldset>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <fieldset className="border border-gray-700 my-2 rounded-lg">
                    <input
                      className="w-[92%] outline-none  placeholder-black"
                      placeholder="Years"
                      name="years"
                      {...register("years")}
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border border-gray-700 my-2 rounded-lg">
                    <input
                      className="w-[92%] outline-none  placeholder-black"
                      placeholder="Months"
                      type="text"
                      name="months"
                      {...register("months")}
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border border-gray-700 my-2 rounded-lg">
                    <input
                      className="w-[92%] outline-none  placeholder-black"
                      placeholder="Days"
                      name="days"
                      {...register("days")}
                    />
                  </fieldset>
                </div>
              </div>

              <div>
                <fieldset className="border border-gray-700 rounded-lg">
                  <select
                    className="w-[98%] outline-none"
                    name="maritalstatus"
                    {...register("maritalstatus")}
                  >
                    <option value="#">Marital Status</option>
                    <option value="married">Married</option>
                    <option value="unmarried">Unmarried</option>
                  </select>
                </fieldset>
              </div>

              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <select
                    className="w-[98%] outline-none"
                    name="identificationno"
                    {...register("identificationno")}
                  >
                    <option value="#">Identification Number</option>
                    <option value="#"> </option>
                    <option value="#"> </option>
                  </select>
                </fieldset>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="grid col-span-2 ">
                <div>
                  <fieldset className="border border-gray-700 my-2 rounded-lg">
                    <input
                      className="w-[95%] outline-none placeholder-black"
                      type="email"
                      placeholder="Email"
                      name="email"
                      {...register("email")}
                    />
                  </fieldset>
                </div>

                <div>
                  <fieldset className="border border-gray-700 my-2 rounded-lg">
                    <input
                      className="w-[95%] outline-none placeholder-black"
                      placeholder="Last name"
                      name="lastname"
                      {...register("lastname")}
                    />
                  </fieldset>
                </div>
                <div className="text-start">
                  <h1>Gender</h1>
                </div>
                <div className="grid grid-cols-3 text-start">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      {...register("gender")}
                    />
                    <label className="px-2">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      {...register("gender")}
                    />
                    <label className="px-2">Female</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      {...register("gender")}
                    />
                    <label className="px-2">Other</label>
                  </div>
                </div>
                <div>
                  <div>
                    <fieldset className="border border-gray-700 my-2 rounded-lg">
                      <select
                        className="w-[95%]  outline-none"
                        name="nationality"
                        {...register("nationality")}
                      >
                        <option value="#">Nationality</option>
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
                <div>
                  <fieldset className="border border-gray-700 my-2 rounded-lg">
                    <input
                      className="w-[95%] outline-none size-full"
                      type="file"
                      name="identificationdocimg"
                      onChange={(e) => {
                        handleIdentificationImg(e);
                      }}
                      //      {...register("identificationdocimg")}
                    />
                  </fieldset>
                </div>
              </div>

              <div className="grid-rows-2 border border-gray-700 px-2 mx-2 my-2 py-2 rounded-lg">
                <div className="h-[80%]">
                  {profileImg !== "" ? (
                    <img src={profileImg} />
                  ) : (
                    <ProfileIcon />
                  )}
                </div>

                <button
                  className="py-2"
                  type="button"
                  onClick={() => {
                    imgref?.current?.click();
                  }}
                >
                  Upload Profile
                </button>
                <input
                  type="file"
                  ref={imgref}
                  className="hidden"
                  name="profileimg"
                  onChange={(e) => {
                    handleFile(e);
                  }}
                  // {...register("profileimg")}
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-start font-bold  px-5 pt-2 whitespace-nowrap">
              Address Details
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-5 px-5">
            <div className="grid   my-2">
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="House No /Flat No /Building Name"
                  type="text"
                  name="housedetails"
                  {...register("housedetails")}
                />
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="State"
                  type="text"
                  name="state"
                  {...register("state")}
                />
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="Area"
                  type="text"
                  name="area"
                  {...register("area")}
                />
              </fieldset>
            </div>
            <div className="grid my-2">
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="Street Address"
                  type="text"
                  name="streetadd"
                  {...register("streetadd")}
                />
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="district"
                  {...register("district")}
                >
                  <option value="#">District</option>
                  <option value="satara">Satara</option>
                  <option value="pune">Pune</option>
                  <option value="sangli">Sangli</option>
                </select>
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="tehsil"
                  {...register("tehsil")}
                >
                  <option value="#">Tehsil</option>
                  <option value="satara">Satara</option>
                  <option value="pune">Pune</option>
                  <option value="sanagli">Sangli</option>
                </select>
              </fieldset>
            </div>
            <div className="grid  my-2">
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%]"
                  name="country"
                  {...register("country")}
                >
                  <option value="#">Country</option>
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
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="Pin Code"
                  type="text"
                  name="pin"
                  {...register("pin")}
                />
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-xl">
                <select
                  className="w-[97%] outline-none"
                  name="city"
                  {...register("city")}
                >
                  <option value="#">City/Village/Town</option>
                  <option value="satara">Satara</option>
                  <option value="pune">Pune</option>
                  <option value="sangli">Sangli</option>
                </select>
              </fieldset>
            </div>
          </div>

          <div>
            <h1 className="text-start font-bold  px-5 pt-2 whitespace-nowrap">
              Income Details
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-5 px-5">
            <div>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="incomerange"
                  {...register("incomerange")}
                >
                  <option value="#">Income range</option>
                  <option value="#">Below 1 Lakhs</option>
                  <option value="#">Between 1 Lakhs to 2 Lakhs</option>
                  <option value="#">Between 1 Lakhs to 2 Lakhs</option>
                  <option value="#">Between 3 Lakhs to 4 Lakhs</option>
                  <option value="#">Between 4 Lakhs to 5 Lakhs</option>
                  <option value="#">Above 5 Lakhs</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="incomedoc"
                  {...register("incomedoc")}
                >
                  <option value="#">Income Document</option>
                  <option value="rc">Ration Card</option>
                  <option value="sdf">Self declaration form</option>
                  <option value="aadhar">Aadhaar card</option>
                  <option value="ic">Income Certificate</option>
                  <option value="f16">Form 16</option>
                  <option value="tr">Tax return</option>
                  <option value="pof">Proof of income</option>
                  <option value="comi">
                    Certificate of Employment with monthly income
                  </option>
                </select>
              </fieldset>
            </div>
            <div>
              {" "}
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[95%] outline-none size-full"
                  type="file"
                  name="incomedocimg"
                  {...register("incomedocimg")}
                />
              </fieldset>
            </div>
          </div>

          <div>
            <h1 className="text-start font-bold  px-5 pt-2 whitespace-nowrap">
              Refferal info
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 px-5">
            <div>
              {" "}
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="refferaltype"
                  {...register("refferaltype")}
                >
                  <option value="">Refferal Type</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </fieldset>
            </div>
            <div>
              {" "}
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="doctorname"
                  {...register("doctorname")}
                >
                  <option value="#">Doctor Name</option>
                  <option value="ps">Dr.Pratik Sabale (MD)</option>
                  <option value="gs">Dr.Gayatri Sontakke (MBBS)</option>
                </select>
              </fieldset>
            </div>
          </div>

          <div>
            <h1 className="text-start font-bold  px-5 pt-2 whitespace-nowrap">
              Visit Details
            </h1>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-5 px-5 my-2">
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <input
                  className="w-[97%] outline-none placeholder-black"
                  placeholder="Date od Visit"
                  type="date"
                  name="dateofvisit"
                  {...register("dateofvisit")}
                />
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="patientsource"
                  {...register("patientsource")}
                >
                  <option value="#">Patient Source</option>
                  <option value="#"></option>
                  <option value="#"></option>
                </select>
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="visittype"
                  {...register("visittype")}
                >
                  <option value="#">Visit Type</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </fieldset>
            </div>
            <div className="grid grid-cols-3 gap-5 px-5 my-2">
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="patientcategory"
                  {...register("patientcategory")}
                >
                  <option value="#">Patient category</option>
                  <option value="#">Patients with immediate problems</option>
                  <option value="#">
                    Patients for check-ups and routine visits
                  </option>
                  <option value="#">
                    Patients looking to switch practices
                  </option>
                  <option value="#">Geriatric patients</option>
                  <option value="#">Anxious patients</option>
                  <option value="#">Skeptical patients</option>
                </select>
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="department"
                  {...register("department")}
                >
                  <option value="#">Department</option>
                  <option value="">Emergency Department (ED)</option>
                  <option value="">Cardiology</option>
                  <option value="">Neurology</option>
                  <option value="">Pediatrics</option>
                  <option value="">Obstetrics and Gynecology </option>
                  <option value="">Oncology</option>
                  <option value="">Orthopedics</option>
                  <option value="">Radiology</option>
                  <option value="">Pathology</option>
                  <option value="">General Surgery </option>
                  <option value="">Urology</option>
                  <option value="">Dermatology</option>
                  <option value="">Gastroenterology</option>
                  <option value="">Nephrology</option>
                  <option value="">Pulmonology</option>
                  <option value="">Psychiatry</option>
                  <option value="">Endocrinology</option>
                  <option value="">Rheumatology</option>
                  <option value="">Anesthesiology</option>
                  <option value="">Intensive Care Unit (ICU) </option>
                  <option value="">Infectious Diseases </option>
                  <option value="">Ophthalmology</option>
                  <option value="">ENT (Otorhinolaryngology) </option>
                  <option value="">Hematology</option>
                  <option value="">Physical Medicine and Rehab </option>
                </select>
              </fieldset>
              <fieldset className="border border-gray-700 my-2 rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="cabin"
                  {...register("cabin")}
                >
                  <option value="#">Cabin</option>
                  <option value="#">General ward</option>
                  <option value="#">Twin sharing</option>
                  <option value="#">Sharing</option>
                  <option value="#">Single AC</option>
                  <option value="#">Deluxe room</option>
                  <option value="#">Sweet room</option>
                  <option value="#">ICU (intensive care unit)</option>
                </select>
              </fieldset>
            </div>
            <div className="grid grid-cols-3 gap-5 px-5 my-2 ">
              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <select
                    className="w-[97%] outline-none"
                    name="doctor"
                    {...register("doctor")}
                  >
                    <option value="#">Doctor </option>
                    <option value="ps">Dr.Pratik Sabale (MD)</option>
                    <option value="gs">Dr.Gayatri Sontakke (MBBS)</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-span-2 my-2 ">
                {" "}
                <fieldset className="border border-gray-700  rounded-lg">
                  <input
                    className="w-[98%] outline-none  placeholder-black"
                    placeholder="Complaints / Reasons"
                    name="reason"
                    {...register("reason")}
                  />
                </fieldset>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-start font-bold  px-5 pt-2 whitespace-nowrap">
              Representative Info
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5 px-5 my-2">
              <fieldset className="border border-gray-700  rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="Name of Reprensentative"
                  name="nameofrepresentative"
                  {...register("nameofrepresentative")}
                />
              </fieldset>
              <fieldset className="border border-gray-700  rounded-lg">
                <input
                  className="w-[97%] outline-none  placeholder-black"
                  placeholder="Mobile No of Reprensentative"
                  name="mobileofrepresentative"
                  {...register("mobileofrepresentative")}
                />
              </fieldset>
              <fieldset className="border border-gray-700  rounded-lg">
                <select
                  className="w-[97%] outline-none"
                  name="relationshiptopatient"
                  {...register("relationshiptopatient")}
                >
                  <option value="#">Relationship to patient </option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="brother">Brother</option>
                </select>
              </fieldset>
            </div>
            <div className="grid grid-cols-3 px-5 gap-5">
              <div className="col-span-2">
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <input
                    className="w-[98%] outline-none placeholder-black"
                    placeholder="Address"
                    name="address"
                    {...register("address")}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="border border-gray-700 my-2 rounded-lg">
                  <select
                    className="w-[97%] outline-none"
                    name="city1"
                    {...register("city1")}
                  >
                    <option value="#">City/Village/Town</option>
                    <option value="satara">Satara</option>
                    <option value="pune">Pune</option>
                    <option value="sangli">Sangli</option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="px-5">
            <button
              type="submit"
              className=" flex justify-start border border-gray-700 px-5 my-2"
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
      {/* <Database.Provider value={{ alldata }}>
        <div>
          <FormDatabase />
        </div>
      </Database.Provider> */}
    </div>
  );
}

export default FinalForm;
