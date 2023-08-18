import React from 'react';
import { Img, Li } from './ImageGalleryItem.styled';

function ImageGalleryItem({ id, webformatURL, tags, value, openModal }) {
  const handleClick = () => {
    openModal(value);
  };

  return (
    <Li onClick={handleClick}>
      <Img id={id} src={webformatURL} alt={tags} />
    </Li>
  );
}

export default ImageGalleryItem;
