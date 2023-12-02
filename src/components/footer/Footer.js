import React from 'react'
import './Footer.css';
import fbIcon from '../../assets/images/fb_icon.png';
import instaIcon from '../../assets/images/insta_icon.png';
import linkIcon from '../../assets/images/linkedin.png';

function Footer() {
  return (
    <div className='footer'>
        <footer>&copy; Copyright 2023 React Js</footer>
        <div className="icons">
            <img src={fbIcon} alt="Facebook" />
            <img src={linkIcon} alt="LinkedIn" />
            <img src={instaIcon} alt="Instagram" />
        </div>
    </div>
  )
}

export default Footer