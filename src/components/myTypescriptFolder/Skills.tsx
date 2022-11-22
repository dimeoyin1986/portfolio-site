import React from 'react'
import Amazon  from "../assets/images/amazon.png"
import Css  from "../assets/images/css.png"
import Firebase  from "../assets/images/firebase.png"
import Github  from "../assets/images/github.png"
import Html from "../assets/images/html.png"
import Javascript  from "../assets/images/js.png"
import Mongodb  from "../assets/images/mongodb.png"
import Node  from "../assets/images/nodejs.png"
import ReactE from "../assets/images/react.png"
import Tailwind  from "../assets/images/realTailwind.png"
import Typescript  from "../assets/images/typescript.png"
import Postgresql  from "../assets/images/postgresql.png"



const Skills = () => {
  return (
    <div id='skills' className=' w-full h-full bg-[black] py-20 text-[white] border-3 border-[red] capitalize'>
        <div className='max-w-[1000px] mx-auto flex flex-col p-1 justify-center w-full h-full'>
            {/* grand Parent */}
            {/* <div>
                <p className="text-2xl  font-bold inline pt-[5rem] border-b-4 border-[gold] ">Skills</p>
                <p className='py-2'>\\These are the technologies of have work with</p>
            </div> */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4 py-1'>
                {/* parent */}
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Html} alt="html icon"  style={{width:"100px", height:"50px"}}/>
                    <p className='my-2'>html</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Css} alt="css icon" style={{width:"100px", height:"50px"}} />
                    <p className='my-2'>css</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Javascript} alt="javascript icon" style={{width:"100px", height:"50px"}} />
                    <p className='my-2'>javascript</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={ReactE} alt="react icon" style={{width:"100px", height:"50px"}}/>
                    <p className='my-2'>react</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Node} alt="node icon" />
                    <p className='my-2'>node</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Mongodb} alt="mongodb icon" style={{width:"100px", height:"70px"}}/>
                    <p className='my-2'>mongodb</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Typescript} alt="typescript icon" style={{width:"100px", height:"50px"}}/>
                    <p className='my-4'>typescript</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Tailwind} alt="tail icon" />
                    <p className='my-2'>tailwind</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Amazon} alt="amazon icon" style={{width:"100px", height:"50px"}}/>
                    <p className='my-2'>amazon</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Github} alt="github icon" />
                    <p className='my-2'>github</p>
                </div>
                
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Firebase} alt="firebase icon" style={{width:"100px", height:"50px"}}/>
                    <p className='my-2'>firebase</p>
                </div>
                <div className='shadow-dm shadow-[#234b23] hover:scale-110 duration-700'>
                    <img className='mx-auto' src={Postgresql} alt="postgresql icon" style={{width:"100px", height:"50px"}}/>
                    <p className='my-2'>postgresql</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills