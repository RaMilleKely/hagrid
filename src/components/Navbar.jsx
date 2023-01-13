import React from 'react'
import '../assets/css/navbar.css'
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from 'react';

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  function Open(value) {
    setOpenMenu(value)
  }

  return (
    
    <>
      <nav className={openMenu === true ? 'navbar resp' : 'navbar'}>
        <div className='logo'>
          <img src='hagrid-logo-alt.svg' alt='hagrid-logo-alt' />
        </div>
        <ul className='nav-list'>
          <li className='nav-item'>Integrations</li>
          <li className='nav-item'>Pricing</li>
          <li className='nav-item'>Log In</li>
          <li className='nav-item'>Try for Free</li>
        </ul>
        <img src="hagrid-logo.svg" alt="hagrid-logo" className='hagrid-logo'/>
        <BiMenu className='icone-BiMenu' onClick={()=>Open(true)}/>
        <BiX className='icone-BiX' onClick={()=>Open(false)}/>
      </nav>
    </>
  )
}
