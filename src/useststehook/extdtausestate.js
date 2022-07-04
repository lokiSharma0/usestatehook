import React from 'react'
import { useState } from 'react'
import { Data } from '../data'

export const Extdtausestate = () => {
    const[get,setGet]=useState(Data) 
  return (
    <>
    {get.map((person)=>
{const {id,name,Age} =person;


   return  (
       <div key={id}>
           <h2> Client Name:{name}</h2>
          <h2>Client Age:{Age}</h2>
           <button type='button' onClick={()=>{
               const finaldtaa=get.filter((person)=>person.id !==id)
              setGet(finaldtaa);
           }}
           
           >Remove</button>
       </div>
   )} )}
   <button type='button' onClick={()=>{setGet([])}}>Clear</button>
    </>
  )
}
