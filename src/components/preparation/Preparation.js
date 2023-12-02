import React from 'react';
import './Preparation.css';
import chipLayers from '../../assets/images/chipLayers.png';
import iconCircle from '../../assets/images/iconCircle.png';

function Preparation() {
  return (
    <div className='prep-container'>
        <div className="yellow"></div>
        <div className="layers-container">
        <img src={chipLayers} alt="Chips Layers" />
        </div>
        <div className="hows">
            <img src={iconCircle} alt='icon'/>
            <h4>How its made</h4>
            
        </div>
        <p className='howsPara'>Every potato is extremely selected by our best potato selectors</p>

        <div className="recipe-container">
            <h4>Secret Recipe</h4>
            <h6>Every big product has his own secret</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore blanditiis aperiam pariatur magnam tempora quidem voluptate qui provident reprehenderit?</p>
        </div>
    </div>
  )
}

export default Preparation