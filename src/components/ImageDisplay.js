// src/components/ImageDisplay.js
import React from 'react';

const ImageDisplay = ({ image }) => {
  if (!image) {
    return <div>No image to display</div>;
  }

  return (
    <div style={{ 
      marginTop: '10px',
      borderRadius: '4px',
      overflow: 'hidden',
      border: '1px solid #e0e0e0'
    }}>
      <img 
        src={image} 
        alt="Uploaded content" 
        style={{ 
          width: '100%', 
          display: 'block',
          maxHeight: '500px',
          objectFit: 'contain'
        }} 
      />
    </div>
  );
};

export default ImageDisplay;