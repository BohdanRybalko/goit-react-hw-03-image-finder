import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import styles from '../styles.css';

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <LoaderSpinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
