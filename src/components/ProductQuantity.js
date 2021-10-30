import { useState } from 'react';
import minusIcon from '../images/icon-minus.svg';
import plusIcon from '../images/icon-plus.svg';
import cartIcon from '../images/icon-cart.svg';

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  function handleDecrement() {
    setQuantity(prevCount => {
      if (prevCount >= 0) return prevCount - 1;
      else return prevCount;
    });
  }

  function handleIncrement() {
    setQuantity(prevCount => prevCount + 1);
  }

  return (
    <div>
      <div className='quantity-counter'>
        <svg className='decrement' onClick={handleDecrement}>
          <use href={`${minusIcon}#minus`} />
        </svg>
        <p className='quantity'>{quantity}</p>
        <svg className='increment' onClick={handleIncrement}>
          <use href={`${plusIcon}#plus`} />
        </svg>
      </div>
      <button className='btn-add'>
        <svg>
          <use href={`${cartIcon}#cart`} />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductQuantity;
