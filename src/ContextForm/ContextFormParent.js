import React, { createContext } from "react";
import ContextFormChild from "./ContextFormChild";
import ContextFormTable from "./ContextFormTable";

export const ParentFormContext = createContext();

function ContextFormParent() {
  const [allData, setAllData] = React.useState([]);
  const [isForm, setIsForm] = React.useState(true);
  return (
    <ParentFormContext.Provider
      value={{
        allData,
        setAllData,
        isForm,
        setIsForm,
      }}
    >
      <div>ContextFormParent</div>
      {isForm ? (
        <div>
          <ContextFormChild />
        </div>
      ) : (
        ""
      )}
      <div>
        <ContextFormTable />
      </div>
    </ParentFormContext.Provider>
  );
}

export default ContextFormParent;
