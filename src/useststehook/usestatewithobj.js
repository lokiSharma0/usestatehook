import React from 'react'
import { useState } from 'react'

export const Usestatewithobj = () => {
    // const[person,setPerson]=useState({
    //     name:'Loki',
    //     age:34,
  
    //     msg:'Hello Lokendra'
    // })
   const[name,setName]=useState('loki');
   const[age,setAge]=useState(23);
   const[msg,setMsg]=useState('Hello Lokendra Sharma');
  return (
 <>
 <h1> Name:{name}</h1>
 <h1>Age:{age}</h1>
 
 <h2> {msg}</h2>
 <p></p>

 <button type='button'  onClick={()=>{
//   setPerson({...person,msg:'you are thre'})
 setName('Bindu Awasthi')
 setAge(22)
 setMsg('You are beautiful')
  
 }}>
     Press

 </button>
 </>
  )
}
