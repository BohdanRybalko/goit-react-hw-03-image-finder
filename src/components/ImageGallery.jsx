import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from '../styles.css';

class ImageGallery extends Component {
  state = {
    showModal: false,
    selectedImage: null,
  };

  handleImageClick = (selectedImage) => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images } = this.props;
    const { showModal, selectedImage } = this.state;

    return (
      <div>
        <ul className={styles.ImageGallery}>
          {images.map((image) => (
            <ImageGalleryItem key={image.id} image={image} onClick={this.handleImageClick} />
          ))}
        </ul>

        {showModal && selectedImage && (
          <Modal imageURL={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
