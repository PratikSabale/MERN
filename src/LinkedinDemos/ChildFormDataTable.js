import React, { useContext } from "react";
import ParentFormData from "./ParentFormData";

function ChildFormDataTable() {
  const { alldata } = useContext(ParentFormData);
  return (
    <div>
      <div>FormDatabase</div>
      <div>
        <table className="border border-gray-700 ">
          <thead>
            <tr>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                UHID
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Mobile NO
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Email
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Prefix
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                First Name
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Middle Name
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Last Name
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                DOB
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Age
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Years
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Months
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Days
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Gender
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Blood Group
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Marital Status
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Nationality
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Profile Img
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Identification Doc
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Identification No
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Identification Doc Img
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                House Details
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Street Address
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Country
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                State
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                District
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Pin
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Area
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Tehsil
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                City
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Income Range
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Income Doc
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Income Doc Img
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Refferal Type
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Doctor Name
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Date Of visit
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                PAtient Source
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Visit Type
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Patient category
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Department
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Cabin
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Doctor
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Reason
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Name of Reprensentative
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Mobile No Of Reprensentative
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Relationship Of Patient
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                Address
              </td>
              <td className="border border-gray-700 whitespace-nowrap px-3">
                City
              </td>
            </tr>
          </thead>
          <tbody>
            {alldata.lenght > 0
              ? alldata.map((item, index) => {
                  return (
                    <tr>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.uhid}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.mobileno}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.email}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.prefix}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.firstname}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.middlename}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.lastname}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.dob}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.age}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.years}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.months}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.days}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.gender}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.bloodgroup}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.maritalstatus}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.nationality}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.profileimg}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.identificationdoc}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.identificationno}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.identificationdocimg}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.housedetails}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.streetadd}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.country}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.state}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.district}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.pin}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.area}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.tehsil}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.city}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.incomerange}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.incomedoc}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.incomedocimg}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.refferaltype}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.doctorname}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.dateofvisit}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.patientsource}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.visittype}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.patientcategory}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.department}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.cabin}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.doctor}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.reason}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.nameofrepresentative}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.mobileofrepresentative}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.relationshiptopatient}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.address}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {item.city}
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

export default ChildFormDataTable;
