import productImage from '../images/image-product-1-thumbnail.jpg';
import removeIcon from '../images/icon-delete.svg';
import { useProducts } from '../contexts/ProductsProvider';

function CartItem({ product }) {
  const { deleteProduct } = useProducts();
  const { name, count, price, discount } = product;
  const discountedPrice = price * (1 - discount);

  function handleDeleteProduct(e) {
    if (e.key !== 'Enter' && e.type !== 'click') return;
    deleteProduct(product);
  }

  return (
    <li>
      <div className='cart-product-image'>
        <img src={productImage} alt='Product' />
      </div>
      <div className='cart-product-info'>
        <p className='cart-product-name'>{name}</p>
        <p className='cart-product-price'>
          ${discountedPrice.toFixed(2)} x {count}{' '}
          <span className='total-price'>
            ${(discountedPrice * count).toFixed(2)}
          </span>
        </p>
      </div>
      <div
        className='btn remove-product'
        onClick={handleDeleteProduct}
        onKeyDown={handleDeleteProduct}
        onMouseDown={e => e.preventDefault()}
        tabIndex='0'>
        <svg>
          <use href={`${removeIcon}#delete`} />
        </svg>
      </div>
    </li>
  );
}

export default CartItem;
