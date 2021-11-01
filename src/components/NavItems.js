import closeIcon from '../images/icon-close.svg';

function NavItems({ menuOpen, onCloseMenu }) {
  return (
    <>
      {menuOpen && <div className='menu-overlay' onClick={onCloseMenu} />}
      <ul className={`nav-items ${menuOpen ? 'show-nav' : ''}`}>
        <button className='btn menu-close' onClick={onCloseMenu}>
          <svg>
            <use href={`${closeIcon}#close`} />
          </svg>
        </button>
        <li className='nav-item'>
          <button className='btn btn-text'>Collections</button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-text'>Men</button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-text'>Women</button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-text'>About</button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-text'>Contact</button>
        </li>
      </ul>
    </>
  );
}

export default NavItems;
