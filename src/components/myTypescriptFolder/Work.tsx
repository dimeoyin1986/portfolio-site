import React from 'react'
import Real from "../assets/images/myestate.jpg"
import Ecomm from "../assets/images/ecommerceApp.jpg"
import Chat from "../assets/images/chat.jpg"
import School from "../assets/images/school.jpg"
import Todo from "../assets/images/godo.jpg"

const Work = () => {
  return (
    <div id='work' className='w-full h-full  text-[white] py-20 bg-[black]'>
        <div className='max-w-[1000px] mx-auto flex flex-col w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[gold] '>\\ Work</p>
                <p className='pt-4'>Kindly check my recent projects</p>
            </div>
            <div  
            className='grid sm:grid-cols-2 md:grid-cols-3 bg-cover h-full  bg-center bg-no-repeat gap-4'>
                <div style={{backgroundImage:`url(${Real})`}}
                 className='shadow-lg group  container rounded-md flex justify-center items-center mx-auto  bg-cover h-[120px] w-[80%] bg-center bg-no-repeat '>
                   <div className='opacity-0 hover:opacity-100' >
                    <span className='text-3xl font-bold text-white'>
                       VANILLA JAVASCRIPT 
                    </span>
                     <div>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Code</button>
                        </a>
                     </div>
                 </div>
                </div>
                <div style={{backgroundImage:`url(${School})`}}
                 className='shadow-lg group  container rounded-md flex justify-center items-center mx-auto  bg-cover h-[120px] w-[80%] bg-center bg-no-repeat '>
                   <div className='opacity-0 hover:opacity-100' >
                    <span className='text-3xl font-bold text-white'>
                       VANILLA JAVASCRIPT 
                    </span>
                     <div>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Code</button>
                        </a>
                     </div>
                 </div>
                </div>
                <div style={{backgroundImage:`url(${Chat})`}}
                 className='shadow-lg group  container rounded-md flex justify-center items-center mx-auto  bg-cover h-[120px] w-[80%] bg-center bg-no-repeat '>
                   <div className='opacity-0 hover:opacity-100' >
                    <span className='text-3xl font-bold text-white'>
                       VANILLA JAVASCRIPT 
                    </span>
                     <div>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Code</button>
                        </a>
                     </div>
                 </div>
                </div>
                <div style={{backgroundImage:`url(${Ecomm})`}}
                 className='shadow-lg group  container rounded-md flex justify-center items-center mx-auto  bg-cover h-[120px] w-[80%] bg-center bg-no-repeat '>
                   <div className='opacity-0 hover:opacity-100' >
                    <span className='text-3xl font-bold text-white'>
                       VANILLA JAVASCRIPT 
                    </span>
                     <div>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Code</button>
                        </a>
                     </div>
                 </div>
                </div>
                <div style={{backgroundImage:`url(${Todo})`}}
                 className='shadow-lg group  container rounded-md flex justify-center items-center mx-auto  bg-cover h-[120px] w-[80%] bg-center bg-no-repeat '>
                   <div className='opacity-0 hover:opacity-100' >
                    <span className='text-3xl font-bold text-white'>
                       VANILLA JAVASCRIPT 
                    </span>
                     <div>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Code</button>
                        </a>
                     </div>
                 </div>
                </div>
                <div style={{backgroundImage:`url(${Todo})`}}
                 className='shadow-lg group  container rounded-md flex justify-center items-center mx-auto  bg-cover h-[120px] w-[80%] bg-center bg-no-repeat '>
                   <div className='opacity-0 hover:opacity-100' >
                    <span className='text-3xl font-bold text-white'>
                       VANILLA JAVASCRIPT 
                    </span>
                     <div>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='rounded-lg px-4 py-3 m-2 bg-[gold] font-bold text-lg'>Code</button>
                        </a>
                     </div>
                 </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Work