import React, { useState } from 'react'
import email from '../assets/email.png';
import phone from '../assets/phone.png';
import map from '../assets/map.png';
export const Contact = () => {
   const [formData,setformData] = useState({
    email:"",
    name:"",
    messgage:""
   })
//    console.log(formData)
   const handleSubmit=(e)=>{
    e.preventDefault();
    setformData(formData)
    console.log(formData)
    setformData({
        email:"",
        name:"",
        messgage:""
    })
   }
  return (
    <section className='container mx-auto p-10' id='contact'>
        <div>
            <div className='text-center mb-10'>
            <h3>ContactUs</h3>
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            </div>
                <div className='grid gap-12 grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>Send us a message</h1>
                        <p>Feel free to reach out through our contact form or find our
                            contact information.Your feedback question and suggestion are
                            important to us as we strive to provide exceptional services to 
                            university community.
                        </p>
                        <span className='flex gap-3'> 
                            <span className='text-blue-950 fill-current'>
                            <img className=' w-10 ' src={email} alt="email icon" />
                            </span>
                           <p className='my-auto'>Shoaibulhassan5855@gmail.com</p>
                        </span>
                        <span className='flex gap-2'> 
                           <img className='text-blue-950 w-10' src={phone} alt="email icon" />  
                           <p className='my-auto'>+92-30382217</p>
                        </span>
                        <span className='flex gap-2'> 
                           <img className='text-blue-950 w-10' src={map} alt="email icon" />
                           <p className='my-auto'>Sunnat Nagar Abdali Chowk Islampura Lahore</p>
                        </span>
                
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label className='text-xl font-bold mb-5'>Your Name</label><br></br>
                            <input type='text' required placeholder='Enter Your Name'name='name'  onChange={(e)=>setformData({...formData,name:e.target.value})} 
                             value={formData.name}
                            className='form-control mb-5 w-full outline-none text-gray-900 p-2 rounded *:p-2 bg-blue-400/35  focus:border-blue-500/40'></input>
                            <label className='text-xl font-bold mb-5'>Enter Your Phone Number</label><br></br>
                            <input type='phone'required placeholder='Enter Your Phone Number'  onChange={(e)=>setformData({...formData,email:e.target.value})}
                             value={formData.email}
                            className='form-control mb-5 w-full outline-none text-gray-900 p-2 rounded *:p-2 bg-blue-400/35  focus:border-blue-500/40'></input>
                            <label className='text-xl font-bold mb-5'>Enter Your Phone Number</label><br></br>
                            <textarea type='message' required placeholder='Type Your Message'  onChange={(e)=>setformData({...formData,messgage:e.target.value})}
                             value={formData.messgage}
                            className='form-control mb-5 w-full outline-none text-gray-900 p-2 *:p-2 bg-blue-400/35 rounded focus:border-blue-500/40' rows={6}></textarea>
                            <button className='bg-blue-800 rounded-full py-2 px-5 text-xl font-bold text-white'>Submit</button>              
                        </form>
                    </div>   
                </div>
       </div>
    </section>
  )
}
