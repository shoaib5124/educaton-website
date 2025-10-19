import React from 'react'
import cphoto1 from '../assets/cphoto.png';
import cphoto2 from '../assets/cphoto1.png';
import cphoto3 from '../assets/cphoto3.png';
import cphoto4 from '../assets/cphoto4.png';

 const Campus = () => {
  return (
    <section id='campus' className="container mx-auto ">
     <div className="flex justify-center flex-col space-y-4 items-center">
        <div className="text-center">
            <p>Gallery</p>
            <h1 className="text-3xl font-bold">Campus Photos</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 p-10">
            <img src={cphoto1} className="w-full aspect-[2/2] rounded-2xl"/>
            <img src={cphoto2} className="w-full aspect-[2/2] rounded-2xl"/>
            <img src={cphoto3} className="w-full aspect-[2/2] rounded-2xl"/>
            <img src={cphoto4} className="w-full aspect-[2/2] rounded-2xl"/> 
        </div>
        <div>
            <button className="bg-blue-700 font-bold py-2 px-4 rounded-full text-white">Click Here--</button>
        </div>
     </div>
    </section>
  )
}
export default Campus
