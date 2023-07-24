// ImagePopup.js
import React from 'react';
import { PopupboxManager } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const ImagePopup = ({ image, onClose }) => {
  const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 500,
    image: image.urls.regular, 
  };

  const openPopupbox = () => {
    PopupboxManager.open(popupboxConfig);
  };

  const closePopupbox = () => {
    PopupboxManager.close();
    onClose();
  };

  return (
    <div onClick={openPopupbox}>
      <img src={image.urls.small} alt={image.alt_description} style={{ width: '100%' }} />
      <div style={{ marginTop: '10px' }}>
        <strong>Photographer:</strong> {image.user.name}
      </div>
      <div>
        <strong>Views:</strong> {image.views}
      </div>
      <div>
        <strong>Download:</strong>{' '}
        <a href={image.links.download} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </div>
      {/* The popupbox will be shown here */}
      <div onClick={closePopupbox}>
        {/* Add any content you want to show in the popup here */}
      </div>
    </div>
  );
};

export default ImagePopup;
