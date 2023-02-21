import React, { useState } from "react";
import PackageUi from "./PackageUi";

function PackageUploadFormss() {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [post, setPost] = useState(null);
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2YwNDUyZGE0Y2FjZjEwMWUzMDVmNTQiLCJpYXQiOjE2NzY5NDY2NDIsImV4cCI6MTY3Njk1Mzg0Mn0.CqAiSA6WiGExxoWeuN6fYp9pYOZltpDdtL_bQfRV86Q";
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }
        formData.append("title", title);
        formData.append("price", price);
        formData.append("description", description);
        console.log(formData);
        fetch("http://13.211.252.242/api/service-packages/", {
            method: "POST",
            headers: { Authorization: "Bearer " + token },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    setFiles([]);
                    setTitle("");
                    setPrice(0);
                    setDescription("");
                    return response.json();
                } else {
                    return { message: "code sai rồi" };
                }
            })
            .then((data) => setPost(data.post))
            .catch((error) => {
                console.log("err1");
                console.error(error);
            });
    };

    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        const newFiles = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            newFiles.push(selectedFiles[i]);
        }
        setFiles([...files, ...newFiles]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };


    const handleRemoveFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title-input">title:</label>
                <input
                    type="text"
                    id="title-input"
                    value={title}
                    onChange={handleTitleChange}
                />
                <label htmlFor="price-input">price:</label>

                <input
                    type="text"
                    id="price-input"
                    value={price}
                    onChange={handlePriceChange}
                />
                <label htmlFor="description-input">Description:</label>

                <input
                    type="text"
                    id="description-input"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                {files.map((file, index) => (
                    <div key={index}>
                        <span>{file.name}</span>
                        <button type="button" onClick={() => handleRemoveFile(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <div>
                    <label htmlFor="file-input">Upload Images:</label>
                    <input
                        type="file"
                        id="file-input"
                        onChange={handleFileChange}
                        multiple
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {post ? <PackageUi post={post} /> : ""}
        </div>
    );
}

export default PackageUploadFormss;
