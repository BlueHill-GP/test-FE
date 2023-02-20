
import React from 'react';

const Post = ({ post }) => {
    // const postqq = post.post
    // console.log(postqq);
    console.log(post);
    if (!post || !post.image) {
        return null;
    }
    return (
        <div>
            <p>{post.description}</p>
            {post.image.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Post image ${index}`} />
            ))}
            <p>Likes: {post.like.length}</p>
            <p>User: {post.user}</p>
            <p>Posted at: {new Date(post.createAt).toLocaleString()}</p>
        </div>
    );
};

export default Post;