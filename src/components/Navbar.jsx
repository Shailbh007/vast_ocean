import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
    const navigate = useNavigate();
    const handleClick=()=>{
       
        navigate(props.path_name);
    }
  return (
    <div className='flex justify-between bg-[#1e2024] '>
        {props.logo && <div className='text-xl text-white font-bold p-2 m-2 md:text-3xl'>Vast_MountainGate</div>}
        <button onClick={handleClick} className=' flex justify-center items-center hover:bg-blue-600 text-md   text-white p-2  bg-blue-500 rounded m-2 md:text-xl' >{props.name}</button>
    </div>
  )
}
