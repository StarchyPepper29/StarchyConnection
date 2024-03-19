import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostButtons from '../components/buttons';

const Single = () => {  
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/blogs/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]); // Make sure to include id in the dependency array

    return (
        <div>
            <h1>Single</h1>
            <p>Here is the single blog post</p>
            <h2>{post.title}</h2>
            <PostButtons id={post._id} />
        </div>
    );
};

export default Single;
