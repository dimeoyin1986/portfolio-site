import React, { FC,useState } from 'react'
// import { Link } from 'react-router-dom'
import{FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from 'react-scroll'

import Dimeoyin  from "../assets/images/dimeoyin.jpeg"
export const NavBar :FC = ()=> {
   const [toggleNav, setToggleNav] = useState<React.SetStateAction<boolean>>(false)
   const funcToggle = ():void =>setToggleNav(!toggleNav)

   
  return (
    <nav>
    <div className="fixed w-full h-[80px] flex justify-between items-center px-3 bg-[black] text-[gray] capitalize">
        <img src={Dimeoyin} alt="dimeoyin logo" style={{width:"100px", height:"70px"}}/>
      
         <ul className='hidden md:flex'>
          <li>
          <Link  to="home" spy={true} smooth={true}  duration={500} >
            Home
        </Link>
          </li>
          <li>
          <Link  to="about" spy={true} smooth={true}  duration={500} >
            About
        </Link>
          </li>
          <li>
          <Link  to="contact" spy={true} smooth={true}  duration={500} >
            Contact
        </Link>
          </li>
          <li>
          <Link  to="skills" spy={true} smooth={true}  duration={500} >
            Skills
        </Link>
          </li>
          <li>
          <Link  to="work" spy={true} smooth={true}  duration={500} >
            Work
        </Link>
          </li>
          <li>
          <Link  to="company" spy={true} smooth={true}  duration={500} >
            Company
        </Link>
          </li>
          
         </ul>
      
        {/* hamburge */}
        <div onClick={funcToggle} className='md:hidden z-10 hover:bg-[white] cursor-pointer rounded-xl'>
          {!toggleNav ? <FaBars/>:<FaTimes/>}
        </div>
        {/* mobile menu */}
      
        <ul className={
          !toggleNav ? 
          "hidden":"absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"}>
          <li className='py-6 text-4xl'>
          <Link onClick ={funcToggle} to="home" spy={true} smooth={true}  duration={500} >
            Home
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick ={funcToggle}  to="about" spy={true} smooth={true}  duration={500} >
            About
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick ={funcToggle}  to="contact" spy={true} smooth={true}  duration={500} >
            Contact
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick ={funcToggle}  to="skills" spy={true} smooth={true}  duration={500} >
            Skills
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick ={funcToggle}  to="work" spy={true} smooth={true}  duration={500} >
            Work
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick ={funcToggle}  to="company" spy={true} smooth={true}  duration={500} >
            Company
        </Link>
          </li>
         </ul>
     
        {/* social icons */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[170px] h-[60px] flex justify-between'><a className='flex justify-around items-center w-full  text-gray-400 ml-[-100px] hover:ml-[-7px] duration-300 bg-[#012b01]' href="/">Linkedin<FaLinkedin size={30}/></a></li>
            <li className='w-[170px]  h-[60px] flex justify-between'><a className='flex justify-around items-center w-full text-gray-400 ml-[-100px] hover:ml-[-7px] duration-300 bg-[maroon]' href="/">Email <HiOutlineMail size={30}/></a></li>
            <li className='w-[170px]  h-[60px] flex justify-between'><a className='flex justify-around items-center w-full text-gray-400 ml-[-100px] hover:ml-[-7px] duration-300 bg-[#0d0a0a]' href="/">Github <FaGithub size={30}/></a></li>
            <li className='w-[170px]  h-[60px] flex justify-between'><a className='flex justify-around items-center w-full text-gray-400 ml-[-100px] hover:ml-[-7px] duration-300 bg-[navy]' href="/">Resume <BsFillPersonLinesFill size={30}/></a></li>
          </ul>
          
        </div>                        
     </div> 
     
    </nav>
  )
}
