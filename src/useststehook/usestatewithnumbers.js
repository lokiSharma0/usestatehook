import React from 'react'
import { useState } from 'react'

export const Usestatewithnumbers = () => {
    const[value,setValue]=useState(0)
  return (
   <>
   <p>{value}</p>
   <button onClick={()=>{
   setValue(value +1);

   }}>Increase</button> 
   <button onClick={()=>{
       setValue(0)
   }}>Reset</button>
   <button onClick={()=>{

    setValue(value-1);
   }}>Decrease</button>
   </>
  )
}
