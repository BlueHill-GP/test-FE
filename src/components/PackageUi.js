
import React, { useState } from 'react';
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2YwNDUyZGE0Y2FjZjEwMWUzMDVmNTQiLCJpYXQiOjE2NzY4NzgwNzQsImV4cCI6MTY3Njg4NTI3NH0.mMqgVTCLrIN5w5QFseGBZMXWob_zt-zeDwKISu6Bs-w";

const PackageUi = ({ post }) => {

    const handleSubmitDelete = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/api/service-packages/${post._id}`, {
            method: 'DELETE',
            headers: { Authorization: "Bearer " + token },
        })
            .then(response => {
                if (response.ok) {
                    // props.onDelete(postId);
                } else {
                    throw new Error('Failed to delete post');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
    console.log(post);
    if (!post || !post.image) {
        return null;
    }
    return (
        <div>
            <form onSubmit={handleSubmitDelete}>
                <label>
                    Enter the ID of the post you want to delete:
                </label>
                <button type="submit">Delete Post</button>
            </form>
            <p>{post.title}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
            {post.image.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Post image ${index}`} />
            ))}
            <p>Star: {post.star.length}</p>
            <p>User: {post.user}</p>
            <p>Posted at: {new Date(post.createAt).toLocaleString()}</p>
        </div>
    );
};

export default PackageUi;