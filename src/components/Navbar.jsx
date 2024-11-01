import React from 'react';
import Button from './Extra_component/Button';
import { Link } from 'react-router-dom'

// Button Component


// Navbar Component
export default function Navbar(props) {
  return (
    <div className='flex justify-between fixed z-10 top-0 w-full bg-white'>
      
        <div className='flex text-xl gap-2 text-white font-bold  md:text-3xl font-sans'>
          <Link to="/" className='flex justify-center items-center'><img src="./images/file.png" className='w-[70px] object-contain ' alt="" srcset="" /><span className='flex justify-center items-center text-gray-600'>Vast Ocean</span></Link>
        </div>
      {props.name &&
      <Button name={props.name} path_name={props.path_name} />}
    </div>
  );
}
