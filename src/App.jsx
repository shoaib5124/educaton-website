import React from 'react'
import { useState } from "react";
import './index.css'
import Navbar from './component/navbar'
import {Mblnav} from './component/Mblnav'
import Home from './component/Home'
import {Program} from './component/program'
import {Contact} from './component/Contact'
import Campus from './component/Campus'
import Testimonials from './component/testimonial'
import Footer from './component/footer'
const App = () => {
  const [menu,setmenu] = useState(false)
  console.log(menu)
  return (
    <>
    <Navbar menu={menu} setmenu={setmenu}/>
    <Mblnav  menu={menu} setmenu={setmenu}/>
    <Home/>
    <Program/>
    <Campus/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
