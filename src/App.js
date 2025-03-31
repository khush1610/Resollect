// src/App.js
import React, { useState } from "react";
import LoanPortfolio from "./components/LoanPortfolio";
import ImageDisplay from "./components/ImageDisplay";
import user from "./components/user.png";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = (file) => {
    const fileUrl = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      setUploadedImage(fileUrl);
    } else {
      console.log(`File uploaded: ${file.name} (${file.type})`);
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={user}
            alt="User"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>Tushar</span>
            <span style={{ fontSize: "12px", color: "#555" }}>
              tushar@resollect.com
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 70px)" }}>
        <div style={{ flexGrow: 1, overflow: "hidden" }}>
          <LoanPortfolio onUpload={handleUpload} />
        </div>

        {uploadedImage && (
          <div
            style={{
              width: "300px",
              padding: "20px",
              borderLeft: "1px solid #e0e0e0",
              backgroundColor: "#fafafa",
            }}
          >
            <h3>Uploaded Image</h3>
            <ImageDisplay image={uploadedImage} />
            <button
              onClick={() => setUploadedImage(null)}
              style={{
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Clear Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
