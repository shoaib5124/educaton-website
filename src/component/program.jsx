import React from 'react'
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import logo from '../assets/logo.png' 
import photo3  from '../assets/photo3.png';
import Graduation  from '../assets/graduation.png';
import playIcon  from '../assets/play-button.png';

export const Program = () => {
  return (
    <section  id='program' className='mt-5 min-h-screen '>
        <div className='container mx-auto'>
            <div className='text-center'>
                <h3>Our program</h3>
                <h1 className="text-3xl font-bold">What We Offer</h1>
            </div>
            <div className="grid md:grid-cols-3 md:p-10 p-10 grid-cols-1  gap-5 mx-auto justify-around mt-10">
               <div className="relative group overflow-hidden">
                 <img src={photo1} className='w-full rounded-2xl aspect-[2/2] object-cover' alt="" />
                  <div  className="absolute bottom-[-65%] w-full h-full transition-all rounded-2xl duration-1000 flex flex-col group-hover:bottom-0 gap-3 group-hover:opacity-50 opacity-0 bg-black justify-center items-center text-white ">
                  <img src={logo} className='w-12 rounded-2xl text-white' alt="" />
                  <p className="">Graduation Complete</p>
                  </div>
                  </div>
               <div className="relative group overflow-hidden">
                 <img src={photo2} className='w-full rounded-2xl aspect-[2/2] object-cover' alt="" />
                   <div  className="absolute bottom-[-65%] w-full h-full transition-all rounded-2xl duration-1000 flex flex-col group-hover:bottom-0 gap-3  group-hover:opacity-50 opacity-0 bg-black justify-center items-center text-white ">
                  <img src={logo} className='w-12 rounded-2xl text-white' alt="" />
                  <p className="">Graduation Complete</p>
                  </div>
               </div>
               <div className="relative group overflow-hidden">
                 <img src={photo3} className='w-full rounded-2xl aspect-[2/2] object-cover' alt="" />
                 <div  className="absolute bottom-[-65%] w-full h-full transition-all opacity-0 rounded-2xl duration-1000 flex flex-col group-hover:bottom-0 gap-3 group-hover:opacity-50 bg-black justify-center items-center text-white ">
                  <img src={logo} className='w-12 rounded-2xl text-white' alt="" />
                  <p className="">Graduation Complete</p>
                  </div>
               </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 grid-cols-1 p-10">
              <div className="relative aspect-[4/3] object-cover"> 
                <img src={Graduation} className='w-full h-full rounded-3xl' alt="" />
                <div className=' absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2'>
                <img src={playIcon} className='w-16  ' alt="" />  
                </div> 
              </div>
              <div className="my-auto">
                <h3 className="text-blue-500">About University</h3>
                <h1 className="text-3xl font-bold mb-3">Nurturinng Tomorrow's<br></br>Leaders Today</h1>
                <p>
                  Embark on a transformative ediucational journey with our university's comprehensive
                  educations programss.Our cutting edge curriculum is designed to empower students
                  whith the knowledge,kills and experience made to excel in the dynamic filed
                  of education
                   <br></br>
                   <br></br>
                  Embark on a transformative ediucational journey with our university's comprehensive
                  educations programss.Our cutting edge curriculum is designed to empower students
                  whith the knowledge,kills and experience made to excel in the dynamic filed
                  of education
                   <br></br>
                   <br></br>
                  Embark on a transformative ediucational journey with our university's comprehensive
                  educations programss.Our cutting edge curriculum is designed to empower students
                  whith the knowledge,kills and experience made to excel in the dynamic filed
                  of education
                </p>
              </div>
            </div>
        </div>
    </section>
  )
}
