import React from 'react'
import { useState } from 'react'

export const Fatchingdata = () => {
 
    const[user,setUser]=useState([])
    const getdata=async()=>{
        const fetchdata=await fetch('https://api.github.com/users');
        const finaldata=await fetchdata.json();
         setUser(finaldata);
    }
    getdata();

  return (
    <>
    {user.map(({id,login,node_id,avatar_url,html_url})=>(
        <div key={id}>
            <p>{login}</p>
            <p>{node_id}</p>
            <img src={avatar_url} alt={login}></img>
            <a href={html_url}> profile</a>
    
        </div>

    ))}
    </>
  )
}
