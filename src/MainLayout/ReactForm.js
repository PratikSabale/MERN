import React from "react";
import { Form } from "react-router-dom";

export default function ReactForm() {
  const [values, setValues] = React.useState({
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    mobile: "",
    aadhar: "",
  });

  const [users, setUsers] = React.useState([]);

  function handlechange(e) {
    let regEx = ["^(+d{1,2}s?)?(?d{3})?[s.-]?d{3}[s.-]?d{4}$"];

    if (e.target.name === "mobile") {
      if (regEx?.test === e.target.value) {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log("m : ", true);
      }
    }

    // console.log("name is :", values);
    // console.table(users);
  }
  function setValuess() {
    let dataarray = [...users];
    console.log("Mobile number : ", users);
    dataarray.push(values);

    setUsers(dataarray);
  }

  return (
    <div>
      <div>ReactForm</div>
      <div className="grid grid-cols-6 py-5 my-5 mx-5 gap-5 px-[20%]">
        <input
          className="border border-gray-800  py-3  text-center"
          name="firstname"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="First Name"
        />

        <input
          className="border border-gray-800  py-5 text-center"
          name="middlename"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Middle Name"
        />

        <input
          className="border border-gray-800  py-5 text-center"
          name="lastname"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Last Name"
        />

        <input
          className="border border-gray-800  py-5 text-center"
          name="address"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Address"
        />

        <input
          className="border border-gray-800  py-5 text-center"
          name="mobile"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Mobile Number"
        />

        <input
          className="border border-gray-800  py-5 text-center"
          name="aadhar"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Aadhar Number"
        />
      </div>
      <div className="flex justify-center">
        <button
          className="border border-gray-800  px-3 "
          type="button"
          onClick={() => {
            setValuess();
          }}
        >
          Submit
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <table>
          <thead>
            <tr>
              <td className="border border-grey py-2 px-5">First Name</td>

              <td className="border border-grey py-2 px-5">Middle Name</td>

              <td className="border border-grey py-2 px-5">Last Name</td>

              <td className="border border-grey py-2 px-5">Address</td>

              <td className="border border-grey py-2 px-5">Mobile Number</td>

              <td className="border border-grey py-2 px-5">Aadhar Number</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0
              ? users.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.firstname}</td>
                      <td>{item.middlename}</td>
                      <td>{item.lastname}</td>
                      <td>{item.address}</td>
                      <td>{item.mobile}</td>
                      <td>{item.aadhar}</td>
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
