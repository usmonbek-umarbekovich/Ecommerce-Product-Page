import { useState } from 'react';
import minusIcon from '../images/icon-minus.svg';
import plusIcon from '../images/icon-plus.svg';
import cartIcon from '../images/icon-cart.svg';

function ProductQuantity({ onAddProduct }) {
  const [quantity, setQuantity] = useState(0);

  function handleAddProduct() {
    if (quantity > 0) {
      onAddProduct(quantity);
      setQuantity(0);
    }
  }

  function handleDecrement(e) {
    if (e.key !== 'Enter' && e.type !== 'click') return;
    setQuantity(prevCount => {
      if (prevCount > 0) return prevCount - 1;
      else return prevCount;
    });
  }

  function handleIncrement(e) {
    if (e.key !== 'Enter' && e.type !== 'click') return;
    setQuantity(prevCount => prevCount + 1);
  }

  return (
    <div className='product-quantity'>
      <div className='quantity-counter'>
        <div
          className='decrement'
          onClick={handleDecrement}
          onKeyDown={handleDecrement}
          onMouseDown={e => e.preventDefault()}
          tabIndex='0'>
          <svg>
            <use href={`${minusIcon}#minus`} />
          </svg>
        </div>
        <p className='quantity'>{quantity}</p>
        <div
          className='increment'
          onClick={handleIncrement}
          onKeyDown={handleIncrement}
          onMouseDown={e => e.preventDefault()}
          tabIndex='0'>
          <svg>
            <use href={`${plusIcon}#plus`} />
          </svg>
        </div>
      </div>
      <button className='btn btn-primary btn-add' onClick={handleAddProduct}>
        <svg>
          <use href={`${cartIcon}#cart`} />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductQuantity;
