import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    // const handleClick = () => setNav(!nav)
    const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

    // const handleClose =()=> setNav(!nav)

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
       <div>
         <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACH</h1>
        </div>
    <ul className='hidden md:flex'>
      <li>Home</li>
      <li>Destinations</li>
      <li>Travel</li>
      <li>View</li>
      <li>Book</li>
    </ul>
        <div className='hidden md:flex'>
        <BiSearch className='w-6 h-6 mr-4'/>
        <BsPerson className='w-6 h-6' />
      </div>
        <div className='md:hidden z-10' onClick={handleNav}>
            {nav ?  <AiOutlineClose className='w-6 h-6 text-black'/> : <AiOutlineMenu className='w-6 h-6' /> }
          
        </div>
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEACH</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          {/* <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div> */}
        </ul>
      </div>
      {/* <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>About</li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>Support</li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>Platforms</li>
          <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>Pricing</li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul> */}
      </div>
  );
}
