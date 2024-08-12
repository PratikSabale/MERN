import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ParentForm from "../useformcontext/ParentForm";
import NewForm from "./NewForm";
import { SubmitIcon } from "../commoncomponents/CommonButton";

function ReactHookFormOne() {
  const defaultValues = {
    prefix: null,
    firstname: "",
    middlename: "",
    lastname: "",
    mobile: "",
    address: "",
    email: "",
    gender: "",
    age: "",
    aadhar: "",
    pan: "",
    eduction: null,
  };

  const errorObject = yup.object().shape({
    prefix: yup.object().nullable().required(),
    firstname: yup
      .string()
      .required("Enter First Name")
      .matches(/^[a-z ,.'-]+$/i, "Please Enter Proper Name"),
    middlename: yup
      .string()
      .required("Enter Middle Name")
      .matches(/^[a-z ,.'-]+$/i, "Please Enter Proper Name"),
    lastname: yup
      .string()
      .required("Enter Last Name")
      .matches(/^[a-z ,.'-]+$/i, "Please Enter Proper Name"),
    mobile: yup.string().required("Enter Mobile Number").min(10).max(10),
    address: yup
      .string()
      .required("Enter Your Address")
      .matches(/[A-Za-z0-9'\.\-\s\,]/, "Please Enter Your Proper Address"),
    email: yup
      .string()
      .required("Enter Your Email Id")
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Enter Proper Email Id"),
    gender: yup.string().required("Select Your Gender"),
    age: yup.string().required("Select Your Age").min(1).max(2),
    aadhar: yup.string().required("Enter Your AADHAR NUMBER").min(12).max(12),
    pan: yup
      .string()
      .required("Enter Your PAN NUMBER ")
      .matches(
        /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
        "Please Enter Valid PAN NUMBER"
      ),
    eduction: yup.object().nullable().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(errorObject),
    mode: "onChange",
  });

  const [values, setvalues] = React.useState([]);
  function onSubmitData1(data) {
    // console.log("test :",data);

    let dataarray = [...values];
    dataarray.push(data);
    setvalues(dataarray);
  }
  return (
    <div>
      <div className="grid grid-cols-2 my-5 ">
        <form onSubmit={handleSubmit(onSubmitData1)}>
          <div className="border  ml-10 mr-[10%] bg-blue-100">
            <div className="flex justify-start my-5 mx-5">
              <div>
                <select className=" border rounded-xl mx-2" name="prefix">
                  <option value="mr">Mr</option>
                  <option value="miss">Miss</option>
                  <option value="mrs">Mrs</option>
                </select>
                <div>{errors?.prefix?.message}</div>
              </div>
              <div>
                <input
                  className="border rounded-xl text-center mx-2 "
                  name="firstname"
                  {...register("firstname")}
                  placeholder="First Name"
                />
                <div>{errors?.firstname?.message}</div>
              </div>
              <div>
                <input
                  className="border rounded-xl text-center mx-2"
                  name="middlename"
                  {...register("middlename")}
                  placeholder="Middle Name"
                />
                <div>{errors?.middlename?.message}</div>
              </div>
              <div>
                <input
                  className="border rounded-xl text-center mx-2"
                  name="lastname"
                  {...register("lastname")}
                  placeholder="Last Name"
                />
                <div>{errors?.lastname?.message}</div>
              </div>
            </div>

            <div className="flex justify-start mx-5  my-5">
              <div>
                <input
                  className="border rounded-xl text-center mx-2"
                  name="mobile"
                  {...register("mobile")}
                  placeholder="Mobile"
                />
                <div>{errors?.mobile?.message}</div>
              </div>
              <div>
                <input
                  className="border rounded-xl text-center mx-2"
                  name="email"
                  {...register("email")}
                  placeholder="Email"
                />
                <div>{errors.email?.message}</div>
              </div>
            </div>

            <div className="flex justify-start mx-5  my-5">
              <div className="flex mx-7 ">
                <input
                  className="border rounded-xl text-center mx-2"
                  name="gender"
                  value="male"
                  type="radio"
                  {...register("gender")}
                />
                Male
                <input
                  className="border rounded-xl text-center mx-2"
                  name="gender"
                  value="female"
                  type="radio"
                  {...register("gender")}
                />
                Female
                <div>{errors?.gender?.message}</div>
              </div>
              <div>
                <select
                  className=" border rounded-xl mx-2 px-5"
                  name="age"
                  {...register("age")}
                >
                  <option value="">Age</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>

                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>

                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>

                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>

                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                </select>

                <div>{errors?.age?.message}</div>
              </div>
            </div>

            <div className=" flex justify-start mx-5  my-5">
              <div>
                <input
                  className="border rounded-xl text-center mx-2"
                  name="pan"
                  {...register("pan")}
                  placeholder="Pan No"
                />
                <div>{errors?.pan?.message}</div>
              </div>
              <div>
                {" "}
                <input
                  className="border rounded-xl text-center mx-2"
                  name="aadhar"
                  {...register("aadhar")}
                  placeholder="Aadhar No"
                />
                <div>{errors?.aadhar?.message}</div>
              </div>
            </div>

            <div className=" flex justify-start mx-5">
              <div>
                <select
                  className=" border rounded-xl mx-2 px-5"
                  name="education"
                  {...register("education")}
                >
                  <option value="">Education</option>
                  <option value="mca">MCA</option>
                  <option value="mba">MBA</option>
                </select>

                <div>{errors?.education?.message}</div>
              </div>
              <div>
                {" "}
                <input
                  className="border rounded-xl text-center mx-2"
                  name="address"
                  {...register("address")}
                  placeholder="Address"
                />
                <div>{errors?.address?.message}</div>
              </div>
            </div>
            <div className="flex justify-start my-5 mx-7 ">
              <button
                className="border rounded-xl text-center px-50 text-white py-1 text-black"
                type="submit"
              >
                <SubmitIcon /> Submit
              </button>
              <button
                className="border rounded-xl text-center px-5 bg-red-500 text-white py-1  mx-3"
                type="reset"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
        <div className="mr-[5%] ">
          <table>
            <thead>
              <tr>
                <td className="border border-gray-400 px-3">Prifix</td>
                <td className="border border-gray-400 px-3">First Name</td>
                <td className="border border-gray-400 px-3">Middle Name</td>
                <td className="border border-gray-400 px-3">Last Name</td>
                <td className="border border-gray-400 px-3">Mobile</td>
                <td className="border border-gray-400 px-3">Email</td>
                <td className="border border-gray-400 px-3">Gender</td>
                <td className="border border-gray-400 px-3">Age</td>
                <td className="border border-gray-400 px-3">Pan No</td>
                <td className="border border-gray-400 px-3">Aadhar No</td>
                <td className="border border-gray-400 px-3">Education</td>
                <td className="border border-gray-400 px-3">Address</td>
              </tr>
            </thead>
            <tbody>
              {values.length > 0
                ? values.map((item, index) => {
                    return (
                      <tr>
                        <td className="border border-gray-400 px-3">
                          {item.prefix}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.firstname}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.middlename}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.lastname}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.mobile}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.email}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.gender}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.age}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.pan}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.aadhar}
                        </td>
                        <td className="border border-gray-400 px-3">
                          {item.eduction}
                        </td>
                        <td className="border border-gray-400 px-3">
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
      <ParentForm />
      <NewForm />
    </div>
  );
}
export default ReactHookFormOne;
