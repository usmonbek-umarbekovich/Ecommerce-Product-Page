import { useState } from 'react';
import closeIcon from '../images/icon-close.svg';
import nextIcon from '../images/icon-next.svg';
import previousIcon from '../images/icon-previous.svg';

function ProductImageGallery({ images, lightbox }) {
  const [index, setIndex] = useState(1);

  const thumbnails = Object.keys(images).filter(image =>
    image.includes('thumbnail')
  );

  return (
    <div>
      <div className='main-image'>
        <img src={images[`image-product-${index}.jpg`]} alt='Product' />
        {lightbox && (
          <>
            <svg className='close-gallery'>
              <use href={`${closeIcon}#close`} />
            </svg>
            <svg className='previous-image'>
              <use href={`${previousIcon}#previous`} />
            </svg>
            <svg className='next-image'>
              <use href={`${nextIcon}#next`} />
            </svg>
          </>
        )}
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
