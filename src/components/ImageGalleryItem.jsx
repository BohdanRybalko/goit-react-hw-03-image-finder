import React from 'react';
import styles from '../styles.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className={styles.ImageGalleryItem} onClick={() => onClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt={image.tags} className={styles.ImageGalleryItemImage} />
  </li>
);

export default ImageGalleryItem;
