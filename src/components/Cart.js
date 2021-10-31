import { useState, useEffect, useCallback } from 'react';
import cartIcon from '../images/icon-cart.svg';
import CartItem from './CartItem';

function Cart() {
  const [showCart, setShowCart] = useState(false);

  const handleWindowClick = useCallback(() => {
    setShowCart(false);
  }, [setShowCart]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        setShowCart(false);
      }
    },
    [setShowCart]
  );

  useEffect(() => {
    if (showCart) {
      window.addEventListener('click', handleWindowClick);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCart, handleWindowClick, handleKeyDown]);

  const products = [
    {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      description: `These low-profile sneakers are perfect casual wear companion.
                  Featuring a durable rubber outer sole,
                  they'll withstand everything the weather can offer.`,
      price: 250,
      discount: 0.5,
      count: 3,
    },
  ];
  let length = 0;
  products.forEach(p => {
    length += p.count;
  });

  const productList = products.map(product => (
    <CartItem key={product.id} product={product} />
  ));
  const emptyCartMessage = <p className='empty-cart'>Your cart is empty</p>;

  return (
    <div className='cart-basket'>
      <svg onClick={() => setShowCart(!showCart)}>
        <use href={`${cartIcon}#cart`} />
      </svg>
      {length > 0 && <div className='cart-count'>{length}</div>}
      <div className={`cart-items-container ${showCart ? 'show' : ''}`}>
        <p className='title'>Cart</p>
        <ul className='cart-items'>
          {length > 0 ? productList : emptyCartMessage}
          <button className='btn btn-primary'>Checkout</button>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
