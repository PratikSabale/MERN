import React from 'react'
import { ParentFormContext } from './ContextFormParent'

function ContextFormTable() {
    const {allData,setAllData}=React.useContext(ParentFormContext)
  return (
   <div>
     <div>ContextFormTable</div>
     <div></div>
   </div>
  )
}

export default ContextFormTable