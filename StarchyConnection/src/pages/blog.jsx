import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/blogs')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    

    return (
        <div>
            <h1>Blog</h1>
            <p>Here are all the blog posts</p>
            {posts.map(post => (
            <div key={post._id}>
            <Link to={`/blog/${post._id}`}>
            {post.title}
            </Link>
            
            <h3>{post.author}</h3>
        <p>{post.body}</p>
    </div>
))}
        </div>
    );
}

export default Blog;
