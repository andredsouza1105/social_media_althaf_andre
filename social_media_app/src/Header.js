import React from 'react'
import './css/Header.css';

function Header() {
  return (
    <div className='Header'>
        <div className="Header_logo">Logo
        </div>
        <div className="Header_search">
            <input className='Header_searchInput' type='text'/>
        </div>
        <div className="Header_nav">
        <div className="Header_option">
         Option 1
        </div>
        <div className="Header_option">
        Option 2
        </div>
        <div className="Header_option">
           Option 3 
        </div>
        </div>
    </div>
  )
}

export default Header;
