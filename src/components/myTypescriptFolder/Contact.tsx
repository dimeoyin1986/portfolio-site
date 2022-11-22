import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-8 text-[white]'>
             <form action="https://getform.io/f/e97aca8f-cbd9-488f-a9e5-a9be4abdf581" 
                    method='POST'
                    encType='multipart/form-data'
                className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-1'>
                    <p className='text-4xl font-bold inline border-b-4 border-[gold] '>Contact</p>
                    <p className='pt-1'>\\ submit the form below or shoot me an email-dimeoyin1986@mail.com</p>
                </div>
                <input className='my-1 p-2 bg-[#c26f6f]' type="text" placeholder='Name'name='name' />
                <input className='my-1 p-2 bg-[#c26f6f]' type="email" placeholder='Email'name='email' />
               <textarea name="message" placeholder='Write your message here' id="" className='pb-16 bg-[maroon] text-white '></textarea>
               <input className='p-2' type="file" name='resume[]'/>

               <div className='flex justify-center items-center'>
               <button type='submit' className='border-4 m-2  hover:bg-[navy] hover:rounded-3xl font-bold border-3 w-[200px] h-[30px] bg-[#c26f6f] hover:text-[gold]'>Submit</button>
               </div>
                 
             </form>
        </div>
      )
}

export default Contact