import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import styles from '../styles.css';

const apiKey = '41213027-c6be3d4375fb01bb774365854';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchData();
    }
  }

  fetchData = async () => {
  const { query, page } = this.state;

  if (!query) return;

  try {
    this.setState({ loading: true });
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    this.setState((prevState) => ({
      images: [...prevState.images, ...data.hits],
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    this.setState({ loading: false });
  }
};


  handleSearch = (searchQuery) => {
    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
    });
  };

  loadMoreImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (imageURL) => {
    this.setState({
      showModal: true,
      modalImage: imageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalImage: '',
    });
  };

  render() {
    const { images, loading, showModal, modalImage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onLoadMore={this.loadMoreImages} />}
        {showModal && <Modal imageURL={modalImage} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;