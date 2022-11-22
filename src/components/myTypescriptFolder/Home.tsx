import React,{FC} from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home:FC = ()=> {
  return (
    <div id='home' className='w-full h-screen bg-[black]'>
       {/* container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-[100px]'>
           <h1 className='text-[#7cfa7c] font-bold'>Hi, my name is </h1>
           <p className='text-3xl sm:text-7xl font-bold text-[white]'>Oladokun Ismail Oladimeji</p>
           <h2 className='text-2xl sm:text-5xl font-bold text-[#ebcaca] py-4 max-w-[700px]'>I'm a full stack developer.</h2>
           <p className='text-[white]'>Ismail is an intermediate full stack developer. He has worked in diverse environments with vast breadths of programs and technologies. He is a dynamic and motivated Software Professional with a proven record of design and development of web applications, managing projects from inception to completion, designing educational strategies, coaching individuals to success, building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges.</p>
             <div>
                 <button className='text-[white]  border-2 px-6  my-2 flex items-center hover:bg-[navy]'>View work <span className='hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span> </button>
             </div>
       </div>
    </div>
  )
}

export default Home