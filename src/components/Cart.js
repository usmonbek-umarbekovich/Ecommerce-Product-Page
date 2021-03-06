import { useState, useEffect, useCallback, useRef } from 'react';
import cartIcon from '../images/icon-cart.svg';
import CartItem from './CartItem';
import { useProducts } from '../contexts/ProductsProvider';

function Cart() {
  const [showCart, setShowCart] = useState(false);
  const { products, clearProducts } = useProducts();
  const cartRef = useRef();

  let length = 0;
  products.forEach(p => {
    length += p.count;
  });

  function handleShowCart(e) {
    if (e.key !== 'Enter' && e.type !== 'click') return;
    setShowCart(!showCart);
  }

  const handleWindowClick = useCallback(
    e => {
      const el = e.target.closest('.cart-basket');
      if (el === cartRef.current) return;
      setShowCart(false);
    },
    [setShowCart]
  );

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
      window.addEventListener('click', handleWindowClick, true);
      window.addEventListener('keydown', handleKeyDown, true);
    }

    return () => {
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCart, handleWindowClick, handleKeyDown]);

  const productList = products.map((product, index) => (
    <CartItem key={index} product={product} />
  ));

  return (
    <div className='cart-basket' ref={cartRef}>
      <svg
        onClick={handleShowCart}
        onKeyDown={handleShowCart}
        onMouseDown={e => e.preventDefault()}
        tabIndex='0'>
        <use href={`${cartIcon}#cart`} />
      </svg>
      {length > 0 && <div className='cart-count'>{length}</div>}
      <div className={`cart-items-container ${showCart ? 'show' : ''}`}>
        <p className='title'>Cart</p>
        <ul className='cart-items'>
          {length > 0 ? (
            <>
              {productList}
              <button className='btn btn-primary' onClick={clearProducts}>
                Checkout
              </button>
            </>
          ) : (
            <li className='empty-cart'>Your cart is empty</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
