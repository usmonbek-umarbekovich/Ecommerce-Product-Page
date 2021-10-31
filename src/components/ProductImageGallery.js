import { useState } from 'react';
import closeIcon from '../images/icon-close.svg';
import nextIcon from '../images/icon-next.svg';
import previousIcon from '../images/icon-previous.svg';

function ProductImageGallery(props) {
  const [index, setIndex] = useState(1);
  const { images, lightbox, onOpenGallery, onCloseGallery } = props;

  const thumbnails = Object.keys(images).filter(image =>
    image.includes('thumbnail')
  );

  function handleOpenGallery() {
    if (lightbox) return;

    onOpenGallery();
  }

  function handlePreviousImage() {
    setIndex(prev => {
      if (prev === 1) return thumbnails.length;
      else return prev - 1;
    });
  }

  function handleNextImage() {
    setIndex(prev => {
      if (prev === thumbnails.length) return 1;
      else return prev + 1;
    });
  }

  return (
    <div className={`image-gallery ${lightbox ? 'lightbox' : ''}`}>
      <div className='main-image' onClick={handleOpenGallery}>
        <img src={images[`image-product-${index}.jpg`]} alt='Product' />
        {lightbox && (
          <>
            <svg className='close-gallery' onClick={onCloseGallery}>
              <use href={`${closeIcon}#close`} />
            </svg>
            <div className='previous-image' onClick={handlePreviousImage}>
              <svg>
                <use href={`${previousIcon}#previous`} />
              </svg>
            </div>
            <div className='next-image' onClick={handleNextImage}>
              <svg>
                <use href={`${nextIcon}#next`} />
              </svg>
            </div>
          </>
        )}
      </div>
      <ul className='thumbnail-container'>
        {thumbnails.map((image, i) => (
          <li
            key={i}
            onClick={() => setIndex(i + 1)}
            className={`thumbnail ${
              index === i + 1 ? 'active-thumbnail' : ''
            }`}>
            <img src={images[image]} alt='Product Thumbnail' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductImageGallery;
