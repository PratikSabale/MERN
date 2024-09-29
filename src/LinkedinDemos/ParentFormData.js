import React, { createContext } from "react";
import ChildFormStructure from "./ChildFormStructure";
import ChildFormDataTable from "./ChildFormDataTable";

export const ParentDataBase = createContext();

function ParentFormData() {
  const [alldata, setAllData] = React.useState([]);

  return (
    <ParentDataBase.Provider value={{ alldata, setAllData }}>
      <div>
        <div>ParentFormData</div>
        <div>
          <ChildFormStructure />
        </div>
        <div>
          <ChildFormDataTable />
        </div>
      </div>
    </ParentDataBase.Provider>
  );
}

export default ParentFormData;
