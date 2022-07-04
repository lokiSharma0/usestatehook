import React from 'react'
import { useState } from 'react'

export const Dynamicmoreinputs = () => {
    // const[name,setName]=useState('')
    // const[email,setEmail]=useState('')
    // const[age,setAge]=useState('')
    const[person,setPerson]=useState({fname:'',age:'',email:''})
    const[list,setList]=useState([]);
  const  handleChange=(e)=>{
      const Name=e.target.name
      const Value=e.target.value
      setPerson({...person,[Name]:Value});
   }
  return (<>
    <div>
        <label>Name</label>
        <input
        type='text'
        name='fname'
        value={person.fname}
        // onChange={(e)=>{setName(e.target.value)}}
        onChange={handleChange}
        ></input>
    </div>
    <div>
        <label>Email</label>
        <input
        type='text'
        name='email'
        value={person.email}
      
        onChange={handleChange}
        ></input>
        
    </div>
    <div>
        <label>Age</label>
        <input
        type='number'
        name='age'
        value={person.age}
       
        onChange={handleChange}
        ></input>
        
    </div>
    <div>
      <button onClick={(e)=>{
       e.preventDefault();
       if(person.fname&&person.email&&person.age){
           const number={...person,id:new Date().getTime().toString()}
           setList([...list,number])
           setPerson({fname:'',age:'',email:''})
       }
       else{
  alert('wrong')
       }
       

      }}>Add person</button>
        
    </div>
    {list.map(({id,fname,email,age})=>{
      return(

      <div key={id}>
          <h2>Name:{fname}</h2>
          <h2>Email:{email}</h2>
          <h2>Age:{age}</h2>

       </div>
      )

    })}
    
  </>
  
  )
}
