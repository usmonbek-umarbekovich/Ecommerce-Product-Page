import { useState } from 'react';

function ProductImageGallery({ images }) {
  const [index, setIndex] = useState(1);

  const thumbnails = Object.keys(images).filter(image =>
    image.includes('thumbnail')
  );

  return (
    <div>
      <div className='main-image'>
        <img src={images[`image-product-${index}.jpg`]} alt='Product' />
      </div>
      <ul className='thumbnail-container'>
        {thumbnails.map((image, i) => (
          <li key={i} onClick={() => setIndex(i + 1)}>
            <img src={images[image]} alt='Product Thumbnail' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductImageGallery;
