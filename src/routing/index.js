import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { About } from './about'
import { Error } from './error';
import { Home } from './home'
import { People } from './people';
import { Navbar } from './navbar';
import { List } from './list';


export const Index = () => {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/people/:id" children element={<List/>}  />
      <Route path="*" element={<Error/>} />
      </Routes>
      
      </BrowserRouter>
     

  )
}
