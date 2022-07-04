import React from 'react'
import { Data } from '../data'
import { Link } from 'react-router-dom'

import { useState} from 'react'



export const List = () => {
    const[name,setName]=useState(Data)
    
  return (
      <>
    {name.map(({id,name})=>{
      return(
          <div key={id}>
              <h1>{name}</h1>
          </div>
      )

    })}
    <Link to="/people"></Link>
      </>
  )
}
