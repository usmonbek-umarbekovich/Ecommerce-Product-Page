import { useState, useEffect, useCallback } from 'react';
import closeIcon from '../images/icon-close.svg';
import nextIcon from '../images/icon-next.svg';
import previousIcon from '../images/icon-previous.svg';

function ProductImageGallery(props) {
  const [index, setIndex] = useState(1);
  const [smallScreen, setSmallScreen] = useState(
    () => window.innerWidth <= 515
  );
  const { images, lightbox, onOpenGallery, onCloseGallery } = props;

  const thumbnails = Object.keys(images).filter(image =>
    image.includes('thumbnail')
  );

  const handlePreviousImage = useCallback(() => {
    setIndex(prev => {
      if (prev === 1) return thumbnails.length;
      else return prev - 1;
    });
  }, [thumbnails.length]);

  const handleNextImage = useCallback(() => {
    setIndex(prev => {
      if (prev === thumbnails.length) return 1;
      else return prev + 1;
    });
  }, [thumbnails.length]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePreviousImage();
    },
    [handleNextImage, handlePreviousImage]
  );

  useEffect(() => {
    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox, handleKeyDown]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleSetIndex(e, i) {
    if (e.key !== 'Enter' && e.type !== 'click') return;
    setIndex(i + 1);
  }

  function handleResize() {
    setSmallScreen(window.innerWidth <= 515);
  }

  function handleOpenGallery(e) {
    if (lightbox) return;
    if (window.innerWidth <= 515) return;
    if (e.key !== 'Enter' && e.type !== 'click') return;
    onOpenGallery();
  }

  function handleCloseGallery(e) {
    onCloseGallery();
  }

  return (
    <div className={`image-gallery ${lightbox ? 'lightbox' : ''}`}>
      <div
        className='main-image'
        onClick={handleOpenGallery}
        onKeyDown={handleOpenGallery}
        onMouseDown={e => e.preventDefault()}
        tabIndex={lightbox || smallScreen ? -1 : 0}>
        <img src={images[`image-product-${index}.jpg`]} alt='Product' />
        {lightbox && (
          <svg className='close-gallery' onClick={handleCloseGallery}>
            <use href={`${closeIcon}#close`} />
          </svg>
        )}
        {(lightbox || smallScreen) && (
          <>
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
            onClick={e => handleSetIndex(e, i)}
            onKeyDown={e => handleSetIndex(e, i)}
            onMouseDown={e => e.preventDefault()}
            tabIndex={lightbox ? -1 : 0}
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
