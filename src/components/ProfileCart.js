import Cart from './Cart';
import avatar from '../images/image-avatar.png';

function ProfileCart() {
  return (
    <div className='profile-cart'>
      <Cart />
      <div className='profile-image'>
        <img src={avatar} alt='Avatar' />
      </div>
    </div>
  );
}

export default ProfileCart;
