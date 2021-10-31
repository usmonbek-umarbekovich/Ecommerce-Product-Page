import { useState, useEffect, useCallback } from 'react';
import '../css/main.css';
import Navbar from './Navbar';
import ProductInfo from './ProductInfo';
import ProductImageGallery from './ProductImageGallery';
import { ProductsProvider } from '../contexts/ProductsProvider';

function importAll(r) {
  const images = {};
  r.keys().forEach(key => (images[key.replace('./', '')] = r(key).default));
  return images;
}

function App() {
  const [openGallery, setOpenGallery] = useState(false);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        setOpenGallery(false);
      }
    },
    [setOpenGallery]
  );

  useEffect(() => {
    if (openGallery) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openGallery, handleKeyDown]);

  return (
    <ProductsProvider>
      <header>
        <Navbar />
      </header>
      <main id='product-main-container'>
        <ProductImageGallery
          images={product.images}
          onOpenGallery={() => setOpenGallery(true)}
        />
        <ProductInfo product={product} />
      </main>
      {openGallery && (
        <div className='lightbox-gallery'>
          <div
            className='gallery-overlay'
            onClick={() => setOpenGallery(false)}
          />
          <ProductImageGallery
            images={product.images}
            lightbox={true}
            onCloseGallery={() => setOpenGallery(false)}
          />
        </div>
      )}
    </ProductsProvider>
  );
}

const product = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are perfect casual wear companion.
                  Featuring a durable rubber outer sole,
                  they'll withstand everything the weather can offer.`,
  price: 250,
  discount: 0.5,
  images: importAll(require.context('../images', false, /\.jpg$/)),
};

export default App;
