import React from 'react'
import { useState } from 'react';

export const Gettinginputs = () => {
    const[usernm,setUsernm]=useState('')
    const[email,setEmail]=useState('')
    const[list,setList]=useState([]);
  return (
  <>
  <form>
    <div>
      <label >UserName</label>  
      <input 
      type='text' 
      id='username'
      value={usernm}
      onChange ={(e)=>{setUsernm(e.target.value)}}
      ></input> 
    </div>
    <div>
      <label htmlFor='email'>Email</label>  
      <input 
      type='text' 
      id='email'
      value={email}
      onChange ={(e)=>{setEmail(e.target.value)}}
      ></input> 
    </div>  
    <button onClick={(e)=>{
       e.preventDefault();
       if(usernm && email){
      const person={id:new Date().getTime.toString,usernm,email}
      setList((list)=>{
         return[...list,person]
        
      })

       }else{
    alert('Empty username or email')
       }
       setUsernm('')
       setEmail('')
    }}>Add in list</button>
    
  </form>
  {list.map(({id,usernm,email})=>{
   
    return(
        <div key={id}>
            <h2>{usernm}</h2>
            <h2>{email}</h2>
        </div>
    )
  })}
  
  </>

  )
}
