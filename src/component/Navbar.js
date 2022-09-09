import React from 'react';
import logo from '../images/base-logo.png'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-8'>
    <img src={logo} className="w-25" />
    <h3 >English</h3>
    </div>
  )
}

export default Navbar