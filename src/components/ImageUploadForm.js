import React, { useState } from "react";

function ImageUploadForm() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(uploadedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUploadStatus("Uploading...");

    const formData = new FormData();
    formData.append("images", file);
    console.log(file);

    const API = "http://localhost:4000/api/posts/upload"
    fetch(API, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUploadStatus("Uploaded");
        console.log("Success:", data);
      })
      .catch((error) => {
        setUploadStatus("Error");
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      {previewUrl && <img src={previewUrl} alt="Preview" />}
      <button type="submit">Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </form>
  );
}

export default ImageUploadForm;