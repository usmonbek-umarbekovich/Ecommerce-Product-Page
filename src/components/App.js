import '../css/main.css';
import Navbar from './Navbar';
import ProductInfo from './ProductInfo';
import ProductImageGallery from './ProductImageGallery';

function importAll(r) {
  const images = {};
  r.keys().forEach(key => (images[key.replace('./', '')] = r(key).default));
  return images;
}

function App() {
  const openGallery = true;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductImageGallery images={product.images} />
        <ProductInfo product={product} />
      </main>
      {openGallery && (
        <div className='lightbox-gallery'>
          <ProductImageGallery images={product.images} lightbox={true} />
          <div className='gallery-overlay' />
        </div>
      )}
    </>
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
