import React from 'react'
import Dimeoyin  from "../assets/images/dimeoyin.jpeg"
const Image = () => {
  return (
    <div id='company' className='pb-8 pt-20 flex flex-col justify-center items-center bg-[black] w-full h-full'>
          <img className='rounded-[50%] border-2 border-[gold]' src={Dimeoyin} alt="dimeoyin" style={{"width":"25%","height":"25%","marginBottom":"1rem"}}/>
          <div className='border-2 text-center w-full pl-[7rem]' >
          <p className='text-4xl text-[gold]'>Software Engineering !!! Our Pride ....</p>
          </div>
         
    </div>
  )
}

export default Image