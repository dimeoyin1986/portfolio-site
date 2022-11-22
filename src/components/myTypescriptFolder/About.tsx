import React from 'react'


const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-[black]  pb-[5rem] text-gray-300 flex justify-center items-center border-4 border-[gold] '>
    <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> */}
          
            <div className='sm:text-right  pl-4 pb-2'>
          
                <p className='text-4xl font-bold inline  border-b-4 border-[gold]'>About</p>
                
            </div>
         {/* </div> */}
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
               <div className="">
                   <p className="sm:text-right text-3xl font-bold">  Good day my name is ismail, nice meeting.Please look around.</p>
               </div>
               <div>
                   <p>
                   Ismail is an intermediate full stack developer. He has worked in diverse environments with vast breadths of programs and technologies. He is a dynamic and motivated Software Professional with a proven record of design and development of web applications.
                   </p>
               </div>
       </div>
        </div>
    </div>
   
  )
}

export default About