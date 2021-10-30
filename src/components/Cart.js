import basket from '../images/icon-cart.svg';
import CartItem from './CartItem';

function Cart() {
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
  const length = products.length;

  const productList = products.map(product => (
    <CartItem key={product.id} product={product} />
  ));
  const emptyCart = <p className='empty-cart'>Your cart is empty</p>;

  return (
    <div className='cart-basket'>
      <img src={basket} alt='Cart' />
      <div className='cart-count'>{length > 0 ? length : ''}</div>
      <ul className='card-items-container'>
        {length > 0 ? productList : emptyCart}
      </ul>
    </div>
  );
}

export default Cart;
