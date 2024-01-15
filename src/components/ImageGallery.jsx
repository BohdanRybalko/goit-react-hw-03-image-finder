import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from '../styles.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
    ))}
  </ul>
);

export default ImageGallery;
