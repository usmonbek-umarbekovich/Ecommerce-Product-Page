import productImage from '../images/image-product-1-thumbnail.jpg';
import removeIcon from '../images/icon-delete.svg';

function CartItem({ product }) {
  const { name, count, price, discount } = product;
  const discountedPrice = price * (1 - discount);

  return (
    <li>
      <div className='product-image'>
        <img src={productImage} alt='Product' />
      </div>
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>
          ${discountedPrice.toFixed(2)} x {count}{' '}
          <span className='total-price'>
            ${(discountedPrice * count).toFixed(2)}
          </span>
        </p>
      </div>
      <button className='btn remove-product'>
        <img src={removeIcon} alt='Remove' />
      </button>
    </li>
  );
}

export default CartItem;
