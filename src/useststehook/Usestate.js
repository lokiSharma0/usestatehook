import React from 'react'
import { useState } from 'react';

export const Usestate = () => {
    const[count,setCount]=useState('I am at home');
  
  return (
    <>
     <h2>{count}</h2>
     <button type='button' onClick={()=>{
         if(count ==='I am at home'){

             setCount('I am at school');
         }
         else{
             setCount('I am at home')
         }
;    }}>Click to Increses </button>
    </>
  )
}
