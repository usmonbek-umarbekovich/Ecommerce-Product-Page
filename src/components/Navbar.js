import { useState } from 'react';
import logo from '../images/logo.svg';
import menuIcon from '../images/icon-menu.svg';
import NavItems from './NavItems';
import ProfileCart from './ProfileCart';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id='main-navbar'>
      <button className='btn nav-menu' onClick={() => setMenuOpen(true)}>
        <svg>
          <use href={`${menuIcon}#menu`} />
        </svg>
      </button>
      <img src={logo} alt='sneakers' className='logo' />
      <NavItems menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      <ProfileCart />
    </nav>
  );
}

export default Navbar;
