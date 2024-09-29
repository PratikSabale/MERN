import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon, ViewIcon } from "../commonassets/CommonAssets";

function FormDatabase() {
  const userdata = useSelector((state) => state.datatranspoter.userlist);
  console.log("All data :", userdata);
  const [imageSource, setImageSource] = React.useState("");
  const [identityImgSource, setIdentityImgSource] = React.useState("");
  const [openDialogue, setOpenDialogue] = React.useState(false);

  React.useEffect(() => {
    if (imageSource !== "") {
      setOpenDialogue(true);
    }
  }, [imageSource]);

  React.useEffect(() => {
    if (identityImgSource !== "") {
      setOpenDialogue(true);
    }
  }, [identityImgSource]);
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
            {userdata?.length > 0
              ? userdata.map((user, userIndex) => {
                  return (
                    <tr key={userIndex}>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.uhid}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.mobileno}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.email}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.prefix}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.firstname}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.middlename}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.lastname}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.dob}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.age}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.years}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.months}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.days}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.gender}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.bloodgroup}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.maritalstatus}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.nationality}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        <button
                          type="button"
                          onClick={() => {
                            setImageSource(user?.image);
                          }}
                        >
                          <ViewIcon />
                        </button>
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.identificationdoc}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.identificationno}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        <button
                          type="button"
                          onClick={() => {
                            setIdentityImgSource(
                              user?.identificationdocumentimage
                            );
                          }}
                        >
                          <ViewIcon />
                        </button>
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.housedetails}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.streetadd}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.country}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.state}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.district}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.pin}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.area}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.tehsil}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.city}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.incomerange}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.incomedoc}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.incomedocimg}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.refferaltype}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.doctorname}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.dateofvisit}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.patientsource}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.visittype}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.patientcategory}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.department}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.cabin}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.doctor}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.reason}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.nameofrepresentative}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.mobileofrepresentative}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.relationshiptopatient}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.address}
                      </td>
                      <td className="border border-gray-700 whitespace-nowrap px-3">
                        {user?.city1}
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
      <dialog open={openDialogue}>
        <p>Image is</p>
        <img src={imageSource} />
        <button
          type="button"
          onClick={() => {
            setOpenDialogue(false);
            setImageSource("");
          }}
        >
          <CloseIcon />
        </button>
      </dialog>

      <dialog open={openDialogue}>
        <p>Image is</p>
        <img src={identityImgSource} />
        <button
          type="button"
          onClick={() => {
            setOpenDialogue(false);
            setIdentityImgSource("");
          }}
        >
          <CloseIcon />
        </button>
      </dialog>
    </div>
  );
}

export default FormDatabase;
