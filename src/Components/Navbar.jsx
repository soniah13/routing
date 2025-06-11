import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navbar() {
    const navstyle = ({ isActive}) => {
        return  isActive 
        ? 'text-blue-900 font-bold px-4'
        : 'text-black hover:text-blue-400 font-bold px-4'
        
    };
  return (
    <>
    <nav className='m-6 p-4 bg-blue-200 text-black '>
       <NavLink to='/' className={navstyle} >Home</NavLink> 
       <NavLink to='/profile' className={navstyle} >Profile</NavLink> 
       <NavLink to='/login' className={navstyle} >Login</NavLink>
    </nav>
   
    </>
  )
}

export default Navbar