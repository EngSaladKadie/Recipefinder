import React from 'react'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
       {/* desktop & tablet */}
       <div className='hidden md:flex w-full h-full items-center justify-between'>
         
            <p className='text-headingColor text-xl font-bold'>SYK</p>

          
          <div className='flex items-center'>
             <ul className='flex items-center   gap-8 ' >
                <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>Menu</li>
               <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>About Us</li>
               <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer'>Service</li>
              </ul>
         <div className='relative flex items-center justify-center'>
           
           <div className=' absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center  justify-center'>
             <p className='text-xs text-textWhite font-semibold'>2</p>
           </div>
         </div>

         
        </div>
       </div>

       {/* mobeil */}
        <div className='flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header
