
import React from "react"
import{FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className='bg-gray-950 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-300'>SunShine</span>
            <span className='text-amber-400'>Estate</span>
        </h1>
        </Link>
    
        <form className='bg-gray-200 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search here..' className='bg-transparent focus:outline-none w-24 sm:w-64'></input>
            <FaSearch className="text-slate-500" ></FaSearch>
           
        </form> 
        <ul className="text-white flex gap-4">
            <Link to='/'>
            <li className=" text-slate-300 hidden sm:inline hover:underline">Home</li>
            </Link>
            <Link to='/about'>
            <li className="  hidden sm:inline hover:underline">About</li>
            </Link>
            <Link to='/sign-in'>
            <li className=" hover:underline">Sign In</li>
            </Link>
            
        </ul>
        </div>
    </header>
  )
}
