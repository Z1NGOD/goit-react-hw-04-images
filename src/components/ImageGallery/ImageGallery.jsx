import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.styled';

function ImageGallery({ images, openModal }) {
  return (
    <ImageGalleryUl>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          tags={tags}
          value={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ImageGalleryUl>
  );
}

export default ImageGallery;
