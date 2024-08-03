import React from "react";

export default function Child(props){
     

function Input(isIncrement){
    if(isIncrement===true){
        props.setCount(props.count+1)
    }
    else{
        props.setCount(props.count-1)
    }


//  document.getElementById("in").value=props.setCount
}

    return(

<div>
    <div>
        Count : <input type="number" value={props.count} readOnly/>
        <button onClick={()=>{Input(true)}}>Increment</button>
        <button onClick={()=>{Input(false)} }>Decrement</button>
    </div>
</div>
        

    )


}