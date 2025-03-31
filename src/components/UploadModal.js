// src/components/UploadModal.js
import React, { useState } from 'react';

function UploadModal({ onClose, onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onUpload(selectedFile);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="modal-actions">
            <button type="submit" disabled={!selectedFile}>
              Upload
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;