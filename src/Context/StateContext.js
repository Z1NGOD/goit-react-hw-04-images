import React, { createContext, useState, useContext, useEffect } from 'react';
import getProducts from 'api/Products';

const ImageContext = createContext();

export function useImageContext() {
  return useContext(ImageContext);
}

export function ImageProvider({ children }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [totalHits, setTotalHits] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (page === 1) {
      setImages([]);
    }
    fetchImages();
  }, [ page, searchQuery]);

  const handleSearchQueryChange = newQuery => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalHits(0);
    setLoading(true);
  };

  const fetchImages = async () => {
    const { hits, totalHits } = await getProducts({
      query: searchQuery,
      page,
      per_page,
    });

    setImages(prevImages => [...prevImages, ...hits]);
    setTotalHits(totalHits);
    setLoading(false);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = selectedImageUrl => {
    setSelectedImageUrl(selectedImageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoadMoreShower = () => {
    const totalPages = Math.ceil(totalHits / per_page);
    return totalHits > 0 && page < totalPages;
  };

  const contextValue = {
    images,
    loading,
    handleSearchQueryChange,
    handleLoadMoreShower,
    loadMoreImages,
    openModal,
    closeModal,
    selectedImageUrl,
    isModalOpen,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
}
