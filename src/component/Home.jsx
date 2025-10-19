import React from 'react'
import homeBg from '../assets/home.png';

 const Home = () => {
  return (
    <section id='home' className=" ">
        <div 
          style={{ backgroundImage: `url(${homeBg})` }}
          className=' relative h-screen bg-cover z-0 bg-center'>
                 <div className='absolute inset-0 bg-black bg-opacity-60'>

                 </div>
                    <div className='relative max-w-4xl text-center mx-auto drop-shadow-lg h-screen space-y-3  z-10 text-white p-10 flex flex-col justify-center items-center'>
                        <h1  className='text-white font-bold text-6xl'>We Ensure better education for a better world</h1>
                        <p className='text-lg font-medium'> Our cutting body curriculum is designed to empower students with the knowledge,stuf and
                            experience needed to excel in the dynamic fluid of education
                        </p>
                        <button className=
                        'bg-white py-2 font-bold text-lg px-4 transition hover:translate-y-0.5 rounded-full text-black'>Explore more---</button>
                    </div>
        </div>
    </section>
  )
}
export default Home
