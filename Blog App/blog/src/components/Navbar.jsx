import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
    <h2 className='nav-brand'>Blog App</h2>
        <ul className='menu'>
            <li><Link to="/" className='menu-btn'>Home</Link></li>
            <li><Link to="/addblog" className='menu-btn'>New Blog</Link></li>
        </ul>
    </div>
    </>
  )
}



export default Navbar
