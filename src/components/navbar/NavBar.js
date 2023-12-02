import React from 'react';
import './NavBar.css';
import { FaEquals } from "react-icons/fa6";

function NavBar() {
  return (
    <div className='navbar'>
        <div className="ele">
        <h5 className="logo">POTCHIPS</h5>
        <FaEquals className='faEquals' />
        </div>
    </div>
  )
}

export default NavBar