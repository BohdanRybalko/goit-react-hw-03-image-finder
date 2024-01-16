import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import fetchImages from './Api';
import styles from '../styles.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  handleSearchSubmit = async (query) => {
    this.setState({ query, page: 1, images: [] }, () => this.fetchImages());
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), () => this.fetchImages());
  };

  handleImageClick = (selectedImage) => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const data = await fetchImages(query, page);
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onLoadMore={this.handleLoadMore} />}
        {showModal && <Modal imageURL={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;