import React from 'react';
import styles from '../styles.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      className={styles.ImageGalleryItemImage}
      onClick={() => onClick(image.largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
