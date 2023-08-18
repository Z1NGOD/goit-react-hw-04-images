import React, { useEffect } from 'react';
import { Overlay, ModalDiv, Img } from './Modal.styled';

function Modal({ imageUrl, closeModal }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Overlay onClick={closeModal}>
      <ModalDiv>
        <Img src={imageUrl} alt="Large" />
      </ModalDiv>
    </Overlay>
  );
}

export default Modal;
