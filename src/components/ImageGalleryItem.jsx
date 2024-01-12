import React from 'react';
import styles from '../styles.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onClick(image.largeImageURL)}>
      <img className={styles.ImageGalleryItemImage} src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
