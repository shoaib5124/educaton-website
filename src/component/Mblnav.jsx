import React from 'react'
import {NavLink} from './navbar'
import { Link } from 'react-scroll';

export const Mblnav = ({menu,setmenu}) => {

      return (
    <nav className={`md:hidden fixed h-full bg-blue-600  z-50 w-48 transition-all duration-300 ease-in-out
     ${menu?"right-0":"right-[-200px]"}
    `} >
    <button onClick = {()=>{setmenu(false)}} aria-label="Close Menu" className='absolute  top-7  w-12 h-7 right-9 text-white text-1xl focus:outlinen-none cursor-pointer '>
            X
            </button>
      <ul className='flex flex-col pl-10 absolute top-40 text-start h-full space-y-10 text-lg text-white font-medium '>
               <li><NavLink to="home" onClick = {()=>{setmenu(false)}} >Home</NavLink></li>
               <li><NavLink to="program" onClick = {()=>{setmenu(false)}} >Projects</NavLink></li>
               <li><NavLink to="campus" onClick = {()=>{setmenu(false)}} >Campus</NavLink></li>
               <li><NavLink to="testimonial" onClick = {()=>{setmenu(false)}} >Testimonials</NavLink></li>
               <a href='#contact' onClick = {()=>{setmenu(false)}} >
               <li className='bg-white text-black font-bold rounded-full hover:bg-slate-200 px-3 py-2
                transition hover:translate-y-0.5'><NavLink to="contact" >Contact Us</NavLink></li></a>
             </ul>      
     
   </nav>
  )
}



