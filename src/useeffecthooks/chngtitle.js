import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export const Chngtitle = () => {
    const [value,setVlue]=useState(0);
    useEffect(()=>{
        if(value>0){

            document.title=`New Folder(${value})`;
        }else{ document.title=`New Folder`;}
 
    })
  return (
    <>
    <h2>{value}</h2>
    <button onClick={()=>{
    setVlue(value+1);
    }}>Click</button>
    </>
  )
}
