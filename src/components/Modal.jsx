import React, { Component } from 'react';
import styles from '../styles.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imageURL, onClose } = this.props;

    return (
      <div className="Overlay" onClick={onClose}>
        <div className='Modal'>
          <img className="ModalImage" src={imageURL} alt="Large version" />
        </div>
      </div>
    );
  }
}

export default Modal;
