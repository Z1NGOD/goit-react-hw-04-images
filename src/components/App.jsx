import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import { Button } from 'ui/Button/Button.styled';
import { Container } from 'ui/Container.styled';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { ImageProvider, useImageContext } from '../Context/StateContext';

export function App() {
  const {
    images,
    loading,
    handleSearchQueryChange,
    handleLoadMoreShower,
    loadMoreImages,
    openModal,
    closeModal,
    selectedImageUrl,
    isModalOpen,
  } = useImageContext();

  return (
    <ImageProvider>
      <>
        <SearchBar onSearchQueryChange={handleSearchQueryChange} />
        <ImageGallery images={images} openModal={openModal} />
        <Container>
          {loading && <Loader />}
          {handleLoadMoreShower() && (
            <Button onClick={loadMoreImages}>Load more</Button>
          )}
          {isModalOpen && (
            <Modal imageUrl={selectedImageUrl} closeModal={closeModal} />
          )}
        </Container>
      </>
    </ImageProvider>
  );
}


