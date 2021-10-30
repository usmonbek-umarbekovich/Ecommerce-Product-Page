import logo from '../images/logo.svg';
import NavItems from './NavItems';
import ProfileCart from './ProfileCart';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt='sneakers' className='logo' />
      <NavItems />
      <ProfileCart />
    </nav>
  );
}

export default Navbar;