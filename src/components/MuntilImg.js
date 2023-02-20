import React, { useState } from 'react';

function ImagesUploadForm() {

    const [images, setImages] = useState([]);
    const [uploadStatus, setUploadStatus] = useState("");
    const [text, setText] = useState("");

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setImages(selectedFiles);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('images', image);
        });
        console.log(images);
        const API = "http://localhost:4000/api/posts/uploads"
        const data = { text: text, formData: formData }
        console.log(data);
        fetch(API, {
            method: "POST",
            body: data
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
            <input type="text" value={text} name="description" onChange={e => setText(e.target.value)} />
            <input type="file" name="images" multiple onChange={handleFileChange} />
            <button type="submit">Upload Images</button>
        </form>
    );
}

export default ImagesUploadForm;