import React, { useState, useContext } from 'react';

const ProductsContext = React.createContext();

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  function addProduct(product, count) {
    setProducts([...products, { ...product, count }]);
  }

  function deleteProduct(product) {
    const newProducts = products.filter(p => p !== product);
    setProducts(newProducts);
  }

  function clearProducts() {
    setProducts([]);
  }

  const value = {
    products,
    addProduct,
    deleteProduct,
    clearProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
