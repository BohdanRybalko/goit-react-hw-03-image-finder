import React from 'react';
import styles from '../styles.css';

const Button = ({ onLoadMore }) => (
  <button type="button" className={styles.Button} onClick={onLoadMore}>
    Load more
  </button>
);

export default Button;