import React from 'react';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import NavLinks from './NavLinks';

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="flex justify-between">
      <img src={Logo} alt="logo" className="cursor-pointer h-9" />
      <ul className="items-center hidden gap-10 md:flex">
        <NavLinks />
      </ul>
      {/* Mobile Nav */}
      <ul className={`fixed top-0 z-50 flex flex-col w-2/3 h-screen gap-10 pt-20 bg-white shadow-2xl md:hidden 
        text-medium p-7 duration-500
        ${open ? 'right-0': 'right-[-100%]'}
      `}>
        <NavLinks />
      </ul>

      <div className="z-50 text-2xl md:hidden" onClick={() => setOpen(prev => !prev)}>
        <ion-icon name="menu"></ion-icon>
      </div>
    </nav>
  );
};

export default Nav;
