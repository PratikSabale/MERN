import React from "react";

export default function Child2(props)
{

    
    return(
        <div>
            <div>
            <button type="button" onClick={()=>{props.setBoolean(false)}}>Child 
                2</button>
            </div>
        </div>
    )

   
}