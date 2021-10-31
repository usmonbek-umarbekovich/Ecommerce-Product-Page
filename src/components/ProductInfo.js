import ProductQuantity from './ProductQuantity';
import { useProducts } from '../contexts/ProductsProvider';

function ProductInfo({ product }) {
  const { addProduct } = useProducts();

  function onAddProduct(quantity) {
    addProduct(product, quantity);
  }

  return (
    <div className='product-info'>
      <p className='company-name'>Sneaker Company</p>
      <h1 className='product-name'>{product.name}</h1>
      <p className='product-description'>{product.description}</p>
      <div className='price-info'>
        <div className='discounted-price'>
          <p className='amount'>
            ${(product.price * product.discount).toFixed(2)}
          </p>
          <p className='discount'>{product.discount * 100}%</p>
        </div>
        <p className='original-price'>${product.price.toFixed(2)}</p>
      </div>
      <ProductQuantity onAddProduct={onAddProduct} />
    </div>
  );
}

export default ProductInfo;
