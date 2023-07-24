// ImageGrid.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import ImagePopup from './ImagePopup';

const ImageGrid = ({ searchQuery, loading, setLoading }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // New state to track popup open status

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let apiUrl = `https://api.unsplash.com/photos/random?count=50&client_id=hp8Lua_YzZQkiwIg25WJvRBKgXHStOPMCr2bASCxni8`;

        if (searchQuery) {
          apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=9&client_id=hp8Lua_YzZQkiwIg25WJvRBKgXHStOPMCr2bASCxni8`;
        }

        const response = await axios.get(apiUrl);

        const imageResults = searchQuery ? response.data.results : response.data;

        setImages(imageResults);
        setLoading(false); // Set loading to false after the images are fetched
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    if (!loading) {
      fetchImages();
    }
  }, [searchQuery, loading, setLoading]);

  const showImagePopup = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true); 
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    setIsPopupOpen(false); 
  };

  return (
    <div className={`image-grid ${isPopupOpen ? 'popup-open' : ''}`}>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        images.map((image) => (
          <ImageCard key={image.id} image={image} showImagePopup={showImagePopup} isSelected={selectedImage && selectedImage.id === image.id} />
        ))
      )}

      {selectedImage && <ImagePopup image={selectedImage} onClose={closeImagePopup} />}
    </div>
  );
};

export default ImageGrid;
