import React from 'react';

const ImageCard = ({ image, showImagePopup, isSelected }) => {
  return (
    <div className={`image-card ${isSelected ? 'selected' : ''}`} onClick={() => showImagePopup(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={`image ${isSelected ? 'zoomed' : ''}`}
      />
    </div>
  );
};

export default ImageCard;
