import React from 'react'
import logo from '../assets/logo.png' 
import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
const Navbar = ({menu, setmenu}) => {
  // console.log("setmenu in Navbar:", setmenu);
    const [navbarBg, setNavbarBg] = useState("bg-transparent");
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 80) {
            setNavbarBg("bg-blue-600 shadow-md"); // Change background on scroll
          } else {
            setNavbarBg("bg-transparent");
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []); 
      return (
    <nav className={`z-50  fixed w-full text-white p-5 transition-colors duration-1000 ${navbarBg}`} >
    <div className='flex  container mx-auto justify-between items-center'>
    <div className='flex items-center justify-between w-full'>
       <div className='flex items-center space-x-3'>
         <img src={logo} className='h-12 w-auto rounded-full' alt="" />
         <h1 className='font-bold text-3xl my-auto'>Edusity</h1>
       </div>
       <div className="md:hidden w-12 h-7 relative cursor-pointer z-" onClick={()=> setmenu(true)}> 
               <span className=" font-bold"> 
                &#9776;
               </span>
        </div>
     </div>
     <div>
       <ul className='hidden md:flex items-center space-x-3 text-lg font-medium '>
         <li><NavLink to="home" >Home</NavLink></li>
         <li><NavLink to="program" >Projects</NavLink></li>
         <li><NavLink to="campus" >Campus</NavLink></li>
         <li><NavLink to="testimonial" >Testimonials</NavLink></li>
         <a href='#contact'><li className='bg-white text-black font-bold rounded-full hover:bg-slate-200 px-3 py-2 transition hover:translate-y-0.5'><NavLink to="contact" >ContactUs</NavLink></li></a>
       </ul>
     </div>      
    </div>
     
   </nav>
  )
}

export default Navbar
export const NavLink = ({ to, children,onClick }) => (
  <Link 
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={800}
    className="hover:text-gray-400 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </Link>
);


