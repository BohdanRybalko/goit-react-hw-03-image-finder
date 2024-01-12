import React, { useEffect } from 'react';
import styles from '../styles.css';

const Modal = ({ imageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal}>
        <img className={styles.ModalImage} src={imageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
