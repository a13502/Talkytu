import React from 'react';
import {
  logoSrc,
  userIconSrc
} from './assets/Icons';
import './NavBar.css'


const NavigationBar = ({
  menuItems = ['About us',
    'Become a tutor',
    'Find your tutor',
    ], // Providing a default value as an empty array
  loginButtonText='Login / Signup',
  onMenuItemClick,
  onLoginButtonClick,
}) => {

  return (
    <nav className='NavWrapper'>
      <div className='LogoWrapper'>
        <img className='LogoImg' src={logoSrc} alt="Company Logo" loading="lazy" />
      </div>
      <div className='Menu' >
        {menuItems.map((item, index) => (
          <button className='MenuItem' key={index} onClick={() => onMenuItemClick(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className='LoginWrapper' onClick={onLoginButtonClick} style={ {marginBlockStart: 2}}>
        <img className='UserIcon' src={userIconSrc} alt="User Icon" loading="lazy" />
        <span className='LoginButton'>{loginButtonText}</span>
      </div>
      {/* <div className='BurgerButton' >
        <div className='BurgerIcon'/>
      </div> */}
    </nav>
  );
};


export default NavigationBar;
