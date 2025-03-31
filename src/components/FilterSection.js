// src/components/FilterSection.js
import React, { useState } from 'react';
import UploadModal from './UploadModal';

function FilterSection({ onUpload }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="filter-section">
      <button 
        className="upload-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Upload Image
      </button>
      
      {isModalOpen && (
        <UploadModal 
          onClose={() => setIsModalOpen(false)}
          onUpload={onUpload}
        />
      )}
    </div>
  );
}

export default FilterSection;