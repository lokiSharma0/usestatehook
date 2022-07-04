import React from 'react'
import { Data } from '../data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const People = () => {
    const[people,setPeople]=useState(Data)
    
  return (
       <div>
           
           {people.map(({id,name,Age})=>{
               return(

               <div key={id}>
                   <p>{name}</p>
                   <p>{Age}</p>
                   <Link to={`/people/${id}`}> learn More</Link>
               </div>

             
               )
           })}
       </div>
        
    
  )
}
