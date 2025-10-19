import React from 'react'
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules separately
import { Pagination, Autoplay } from "swiper/modules";
 const testimonial = [
    {
        img: profile1,
        name: "Robert William",
        Address:"Countery,USA",
        testimonial:
                     `Attending this program has transformed my career.
                     The curriculum was engaging and packed with practical skills.
                     I highly recommend it to anyone looking to excel in their field`

    },
    {
        img: profile2,
        name: "Maya G",
        Address:"Countery,Germany",
        testimonial:
                    `This program has completely transformed my approach to learning.
                      The hands-on sessions and expert guidance have been invaluable.
                      I now feel more prepared for my future career than ever before.` 
    },
    {
        img: profile3,
        name: "Robert Brorst",
        Address:"Countery,Australia",
        testimonial:
                  `   Being a part of this program boosted my confidence immensely.
                     The curriculum was challenging yet very rewarding.
                     I highly recommend this experience to anyone serious about growth.`
    },
    {
        img: profile4,
        name: "Harshit Sharma",
        Address:"India",
        testimonial:
                   `       I gained practical skills that I could apply right away.
                     Every module was designed to inspire and empower.
                     My journey with this program has truly set me on a path to success.`
    }
 ]
 const  Testimonials = () => {   
  return (
    <section id='testimonial' className="mt-36 mx-5">
        <div className="container mx-auto">
           <div className='text-center'>
                <h3>Testimonials</h3>
                <h1 className="text-3xl font-bold">What Student  Says</h1>
            </div>
            <div className='flex justify-center'>
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{
                              1024: { slidesPerView: 2, spaceBetween: 40 }, // Large screens
                              768: { slidesPerView: 2, spaceBetween: 20 },  // Medium screens (tablets)
                              640: { slidesPerView: 1, spaceBetween: 10 },  // Small screens (phones)
                            }}
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                             className="mySwiper container mx-auto "
                           >
                {testimonial.map((item,index)=>(
                  <SwiperSlide key={index}  className='flex justify-center max-w-4xl mx-auto'>
                     <div className=" shadow-[20px_20px_5px_rgba(245,245,245,0.5)] px-5 py-20 mb-5">   
                     <div className="flex gap-3">
                          <img src={item.img} className='w-12 h-12 border-[4px] border-solid border-blue-800 rounded-full' alt="tesmonial pic 1" />  
                          <div className="mb-5">
                            <h1 className="text-blue-800 font-bold">{item.name}</h1>
                            <p>{item.Address}</p>
                          </div>                                  
                     </div>
                     <p>{item.testimonial}</p>
                    </div> 
                 </SwiperSlide>
                ))}    
                </Swiper>
            </div>
        </div>
    </section>
  )
}
export default Testimonials
