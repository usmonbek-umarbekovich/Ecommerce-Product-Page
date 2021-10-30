import ProductQuantity from "./ProductQuantity";

function ProductInfo({ product }) {
  return (
    <div>
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
      <ProductQuantity />
    </div>
  );
}

export default ProductInfo;
