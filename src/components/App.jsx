import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { fetchData } from 'components/Api';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showModal: false,
    selectedImage: '',
    isLoading: false,
    totalHits: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchData();
    }
  }

  handleSubmit = (query) => {
    this.setState({ query, page: 1, images: [] }, this.fetchData);
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchData);
  };

  handleImageClick = (selectedImage) => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  fetchData = async () => {
  const { query, page } = this.state;

  try {
    this.setState({ isLoading: true });
    const { images, totalHits } = await fetchData(query, page);

    this.setState((prevState) => ({
      images: [...prevState.images, ...images],
      totalHits,
      showModal: prevState.page < Math.ceil(totalHits / 12),
    }));
  } catch (error) {
    console.error('Error in fetchData:', error);
  } finally {
    this.setState({ isLoading: false });
  }
};
  render() {
 const { images, showModal, selectedImage, isLoading,} = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
        {showModal && <Modal imageURL={selectedImage.largeImageURL} onClose={this.handleCloseModal} />}
      </AppContainer>
    );
  }


}

export default App;
